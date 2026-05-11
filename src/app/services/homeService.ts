import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Film } from '../types/film';
import { Screening } from '../types/screenings';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    private apiUrl = 'https://its-cinema.vercel.app/api';

    constructor(private http: HttpClient) { }

    // Method to get all films
    async getFilms(): Promise<Film[]> {
        return await firstValueFrom(this.http.get<Film[]>(this.apiUrl + "/films"));
    }

    // Method to get films details by id
    async getFilmById(id: number): Promise<Film | null> {
        return await firstValueFrom(this.http.get<Film | null>(this.apiUrl + "/films/" + id));
    }

    // Method to get film screenings by id
    async getFilmScreenings(id: number): Promise<Screening[]> {
        return await firstValueFrom(this.http.get<Screening[]>(this.apiUrl + "/films/" + id + "/screenings"));
    }
}