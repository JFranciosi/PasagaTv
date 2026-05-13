import { Component, OnInit, inject, signal } from '@angular/core';
import { HomeService } from '../../services/homeService';
import { Film } from '../../types/film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  router = inject(Router);
  private homeService = inject(HomeService);

  films = signal<Film[]>([]);
  currentPage = signal<number>(0);
  totalPages = signal<number>(0);

  navigateToFilmDetail(id: number) {
    this.router.navigate(['/home-details', id]);
  }

  async ngOnInit() {
    await this.loadFilms();
  }

  async loadFilms(page: number = 0) {
    const response = await this.homeService.getFilms(page);
    this.films.set(response.films);
    this.currentPage.set(response.currentPage);
    this.totalPages.set(response.totalPages);
  }

  async onPageChange(page: number) {
    if (page >= 0 && page < this.totalPages()) {
      await this.loadFilms(page);
    }
  }
}