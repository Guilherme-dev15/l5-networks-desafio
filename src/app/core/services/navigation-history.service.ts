import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationHistoryService {
  private history: string[] = [];
  private storageKey = 'navigation_history';

  constructor(private router: Router) {
    this.loadHistoryFromStorage();
  }

  startTracking(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.addHistory(event.urlAfterRedirects);
      });
  }

  private addHistory(url: string): void {
    // Evita duplicatas consecutivas
    if (this.history[this.history.length - 1] !== url) {
      this.history.push(url);
      this.saveHistoryToStorage();
      console.log('Navigation History:', this.history);
    }
  }

  private saveHistoryToStorage(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.history));
    } catch (e) {
      console.error('Error saving history to localStorage', e);
    }
  }

  private loadHistoryFromStorage(): void {
    try {
      const storedHistory = localStorage.getItem(this.storageKey);
      if (storedHistory) {
        this.history = JSON.parse(storedHistory);
      }
    } catch (e) {
      console.error('Error loading history from localStorage', e);
    }
  }

  getHistory(): string[] {
    return [...this.history];
  }
}
