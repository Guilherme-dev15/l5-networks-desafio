import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService, Character } from '../../../core/services/api.service';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { StateService } from '../../../core/services/state.service';
import { Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, takeUntil } from 'rxjs/operators';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterModule, InfiniteScrollModule],
  templateUrl: './characters-list.html',
  styleUrls: ['./characters-list.scss']
})
export class CharactersList implements OnInit, OnDestroy {
  characters: Character[] = [];
  displayedColumns: string[] = ['name', 'species', 'status'];
  
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
        this.characters = [];
        this.currentPage = 1;
        this.totalPages = 1;
        return this.loadData(term);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  loadData(term: string) {
    if (this.isLoading || this.currentPage > this.totalPages) {
      return new Subject(); // Retorna um observable vazio para não fazer nada
    }

    this.isLoading = true;
    return this.apiService.getCharacters(this.currentPage, term).pipe(
      map(response => {
        this.characters = [...this.characters, ...response.results];
        this.totalPages = response.info.pages;
        this.currentPage++;
        this.isLoading = false;
      }),
      catchError(() => {
        // Em caso de erro (ex: busca sem resultados), reseta o estado
        this.characters = [];
        this.isLoading = false;
        this.totalPages = 1;
        this.currentPage = 1;
        return [];
      })
    );
  }

  onScroll(): void {
    const searchTerm = this.stateService.getSearchTerm();
    this.loadData(searchTerm).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
