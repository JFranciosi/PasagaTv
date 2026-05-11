import { Component, OnInit, inject } from '@angular/core';
import { HomeService } from '../../services/homeService';
import { Film } from '../../types/film';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private homeService = inject(HomeService);
  films: Film[] = [];

  async ngOnInit() {
    this.films = await this.homeService.getFilms();
  }
}