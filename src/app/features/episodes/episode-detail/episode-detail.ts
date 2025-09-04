import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';

import { ApiService, Character, Episode } from '../../../core/services/api.service';

@Component({
  selector: 'app-episode-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './episode-detail.html',
  styleUrl: './episode-detail.scss'
})
export class EpisodeDetail implements OnInit {
  details: (Episode & { characters: string[] }) | null = null;
  characters: Character[] = [];

  constructor(
    private readonly apiService: ApiService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.apiService.getEpisodeById(Number(id)).subscribe({
      next: (data) => {
        this.details = data as Episode & { characters: string[] };

        if (this.details?.characters?.length) {
          const characterObservables = this.details.characters.map((url) => {
            const characterId = url.split('/').pop();
            return this.apiService.getCharacterById(Number(characterId));
          });

          forkJoin(characterObservables).subscribe({
            next: (characters) => (this.characters = characters),
            error: (err) => console.error('Erro ao buscar personagens do episódio', err)
          });
        }
      },
      error: (err) => console.error('Erro ao buscar detalhes do episódio', err)
    });
  }
}