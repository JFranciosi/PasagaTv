import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserProfile } from '../types/userProfile';

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    private apiUrl = 'https://its-cinema.vercel.app/api';

    constructor(private http: HttpClient) { }

    // Method to create a booking
    async getBooking(bookingId: number): Promise<UserProfile> {
        const body = {
            first_name: "Mario",
            last_name: "Rossi",
            email: "mario.rossi@email.com"
        };
        return await firstValueFrom(this.http.post<UserProfile>(`${this.apiUrl}/screenings/${bookingId}/bookings`, body));
    }
}