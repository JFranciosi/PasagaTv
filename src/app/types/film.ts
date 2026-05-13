export interface Film {
    id: number;
    title: string;
    genre: string;
    duration: number;
    director: string;
    description: string;
    poster_url: string;
    year: number;
    rating: "T" | "VM12" | "VM14" | "VM18";
}

export interface FilmResponse {
    films: Film[];
    totalElements: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
}