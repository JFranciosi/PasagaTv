import { Component, effect, inject, input, signal } from '@angular/core';
import { HomeService } from '../../services/homeService';
import { Film } from '../../types/film';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-details',
  imports: [RouterLink],
  templateUrl: './home-details.html',
  styleUrl: './home-details.css',
})

export class HomeDetails {

  private homeService = inject(HomeService);
  id = input.required<string>();
  film = signal<Film | null>(null);

  constructor() {
    effect(async () => {
      const currentId = this.id();
      if (currentId) {
        this.film.set(await this.homeService.getFilmById(parseInt(currentId)));
      }
    });
  }

}
