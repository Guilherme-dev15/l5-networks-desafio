import { Component, OnInit } from '@angular/core';
import { ApiService, Character as character } from '../../../core/services/api.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-characters-list',
  imports: [MatTableModule],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss'
})
export class CharactersList implements OnInit {
  characters: character[] = [];
  displayedColumns: any = ['name', 'species', 'status'];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe({
      next: (data) => {
        console.log('Dados vindos da API:', data); // 👈
        this.characters = data.results;
      },
      error: (err) => console.error('Erro na API:', err)
    });
  }


}
