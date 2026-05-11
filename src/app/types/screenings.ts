export interface Hall {
    id: number;
    name: string;
    capacity: number;
}

export interface Screening {
    id: number;
    starts_at: string;
    hall: Hall;
    available_seats: number;
}