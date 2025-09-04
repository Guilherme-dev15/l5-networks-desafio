import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationHistoryService } from './core/services/navigation-history.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App implements OnInit {
  // Injeta o serviço de histórico para que ele seja instanciado no início
  constructor(private navigationHistoryService: NavigationHistoryService) {}

  ngOnInit(): void {
    // Inicia o rastreamento da navegação
    this.navigationHistoryService.startTracking();
  }
}
