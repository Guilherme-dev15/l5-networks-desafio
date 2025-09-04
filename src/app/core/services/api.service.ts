import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// =====================
// Tipagem de Personagem
// =====================
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[]; // URLs dos episódios
  origin: { name: string; url: string };
  location: { name: string; url: string };
}

// =====================
// Tipagem de Episódio
// =====================
export interface Episode {
  id: number;
  name: string;
  episode: string;   // Ex: "S01E01"
  air_date: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private readonly http: HttpClient) {}

  // =====================
  // Personagens
  // =====================
  getCharacters(): Observable<{ results: Character[] }> {
    return this.http.get<{ results: Character[] }>(`${this.apiUrl}/character`);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }

  // =====================
  // Episódios
  // =====================
  getEpisodes(): Observable<{ results: Episode[] }> {
    return this.http.get<{ results: Episode[] }>(`${this.apiUrl}/episode`);
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.apiUrl}/episode/${id}`);
  }

  getEpisodeByUrl(url: string): Observable<Episode> {
    return this.http.get<Episode>(url);
  }

  getEpisodesByIds(ids: number[]): Observable<Episode[]> {
    return this.http.get<Episode[]>(`${this.apiUrl}/episode/${ids.join(',')}`);
  }
}
