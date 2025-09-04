import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil, map, catchError } from 'rxjs/operators';

import { ApiService, Episode } from '../../../core/services/api.service';
import { StateService } from '../../../core/services/state.service';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterModule, InfiniteScrollModule],
  templateUrl: './episodes-list.html',
  styleUrls: ['./episodes-list.scss']
})
export class EpisodesList implements OnInit, OnDestroy {
  episodes: Episode[] = [];
  displayedColumns: string[] = ['number', 'season', 'title', 'air_date'];
  
  currentPage = 1;
  totalPages = 1;
  isLoading = false;

  private destroy$ = new Subject<void>();

  constructor(
    private apiService: ApiService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.stateService.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        this.episodes = [];
        this.currentPage = 1;
        this.totalPages = 1;
        return this.loadData(term);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  loadData(term: string) {
    if (this.isLoading || (this.currentPage > this.totalPages && this.currentPage > 1)) {
      return of(null);
    }

    this.isLoading = true;
    return this.apiService.getEpisodes(this.currentPage, term).pipe(
      map(response => {
        if (response && response.results) {
          const sortedResults = response.results.sort((a, b) => this.sortEpisodes(a, b));
          this.episodes = [...this.episodes, ...sortedResults];
          this.totalPages = response.info.pages;
          this.currentPage++;
        }
        this.isLoading = false;
      }),
      catchError(() => {
        this.episodes = [];
        this.isLoading = false;
        this.totalPages = 1;
        this.currentPage = 1;
        return of(null);
      })
    );
  }

  onScroll(): void {
    const searchTerm = this.stateService.getSearchTerm();
    this.loadData(searchTerm).subscribe();
  }

  private sortEpisodes(a: Episode, b: Episode): number {
    const [sA, eA] = a.episode.replace('S', '').split('E').map(Number);
    const [sB, eB] = b.episode.replace('S', '').split('E').map(Number);
    return sA - sB || eA - eB;
  }
  
  // Funções para o template
  getNumber(episode: Episode): string {
    const episodeNumber = episode.episode.split('E')[1];
    return `#${episodeNumber}`;
  }
  
  getSeason(episodeCode: string): string {
    return episodeCode.split('E')[0].replace('S', '');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
