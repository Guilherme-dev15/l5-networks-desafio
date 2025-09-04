import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Interface para a resposta da API que inclui paginação
export interface ApiResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}

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
  episode: string[];
  origin: { name: string; url: string };
  location: { name: string; url: string };
}

// =====================
// Tipagem de Episódio
// =====================
export interface Episode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
  characters: string[];
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  // CORREÇÃO: URL limpa, sem formatação extra.
  private readonly apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private readonly http: HttpClient) {}

  /**
   * Busca personagens com suporte para paginação e filtro por nome.
   * @param page O número da página a ser buscada.
   * @param name O termo de busca para filtrar personagens.
   * @returns Um Observable com a resposta da API ou uma resposta vazia em caso de erro.
   */
  getCharacters(page = 1, name = ''): Observable<ApiResponse<Character>> {
    let params = new HttpParams().set('page', page.toString());
    if (name) {
      params = params.set('name', name);
    }

    return this.http.get<ApiResponse<Character>>(`${this.apiUrl}/character`, { params }).pipe(
      // REATORAÇÃO: Adiciona tratamento de erro. Se a API retornar 404 (nenhum resultado),
      // ele retorna um objeto de resposta vazio, evitando que a aplicação quebre.
      catchError(() => of({ info: { count: 0, pages: 0, next: null, prev: null }, results: [] }))
    );
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }

  /**
   * Busca episódios com suporte para paginação e filtro por nome.
   * @param page O número da página a ser buscada.
   * @param name O termo de busca para filtrar episódios.
   * @returns Um Observable com a resposta da API ou uma resposta vazia em caso de erro.
   */
  getEpisodes(page = 1, name = ''): Observable<ApiResponse<Episode>> {
    let params = new HttpParams().set('page', page.toString());
    if (name) {
      params = params.set('name', name);
    }
    return this.http.get<ApiResponse<Episode>>(`${this.apiUrl}/episode`, { params }).pipe(
      // REATORAÇÃO: Tratamento de erro similar para episódios.
      catchError(() => of({ info: { count: 0, pages: 0, next: null, prev: null }, results: [] }))
    );
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.apiUrl}/episode/${id}`);
  }

  getEpisodeByUrl(url: string): Observable<Episode> {
    return this.http.get<Episode>(url);
  }
}

