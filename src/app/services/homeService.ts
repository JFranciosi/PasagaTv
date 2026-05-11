import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Film } from '../types/film';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    private apiUrl = 'https://its-cinema.vercel.app/api';

    constructor(private http: HttpClient) { }

    async getFilms(): Promise<Film[]> {
        return await firstValueFrom(this.http.get<Film[]>(this.apiUrl + "/films"));
    }
}