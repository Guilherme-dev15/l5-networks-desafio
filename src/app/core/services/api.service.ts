import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  episode: string[];
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  //Listar todos personagens
  getCharacters(): Observable<{ results: Character[] }> {
    return this.http.get<{ results: Character[] }>(`${this.apiUrl}/character`);

  }
  //Listar personagem por ID
  getCharacterById(id: number): Observable<Character>{
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }

  

}
