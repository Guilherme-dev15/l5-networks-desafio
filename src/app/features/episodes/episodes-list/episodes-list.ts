import { Component, OnInit } from '@angular/core';
import { ApiService, Episode } from '../../../core/services/api.service';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importe CommonModule para usar pipes como 'number'

@Component({
  selector: 'app-episodes-list',
  standalone: true, // Adicionado standalone: true, assumindo que é um componente standalone
  imports: [MatTableModule, RouterModule, CommonModule], // Adicionado CommonModule e RouterModule
  templateUrl: './episodes-list.html',
  styleUrls: ['./episodes-list.scss']
})
export class EpisodesList implements OnInit {
  episodes: Episode[] = [];
  displayedColumns: string[] = ['number', 'season', 'title', 'air_date'];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getEpisodes().subscribe({
      next: (data) => {
        // Ordena por temporada e episódio
        this.episodes = data.results.sort((a, b) => {
          const [sA, eA] = a.episode.replace('S', '').split('E').map(Number);
          const [sB, eB] = b.episode.replace('S', '').split('E').map(Number);
          return sA - sB || eA - eB;
        });
      },
      error: (err) => console.error('Erro na API:', err)
    });
  }

  getNumber(index: number): string {
    return `#${(index + 1).toString().padStart(2, '0')}`;
  }

  getSeason(episodeCode: string): string {
    return episodeCode.split('E')[0].replace('S', '');
  }
}