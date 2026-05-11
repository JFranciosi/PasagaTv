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
  navigateToFilmDetail(id: number) {
    this.router.navigate(['/home-details', id]);
  }

  private homeService = inject(HomeService);
  films = signal<Film[]>([]);

  async ngOnInit() {
    this.films.set(await this.homeService.getFilms());
  }
}