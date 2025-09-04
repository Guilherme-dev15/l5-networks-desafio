import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { ApiService, Character } from '../../../core/services/api.service';

@Component({
  selector: 'app-character-detail',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './character-detail.html',
  styleUrls: ['./character-detail.scss']
})
export class CharacterDetail implements OnInit {
  details: Character | null = null;
  episodes: any[] = [];

  constructor(
    private readonly apiService: ApiService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.apiService.getCharacterById(Number(id)).subscribe({
      next: (data) => {
        this.details = data;

        if (this.details?.episode?.length) {
          forkJoin(
            this.details.episode.map((url) =>
              this.apiService.getEpisodeByUrl(url)
            )
          ).subscribe({
            next: (episodes) => (this.episodes = episodes),
            error: (err) => console.error('Erro ao buscar episódios', err)
          });
        }
      },
      error: (err) => console.error('Erro ao buscar personagem', err)
    });
  }
}
