export interface Review {
    id: string;
    username: string;
    destination: string;
    reviewText: string;
    rating: number; 
    avatarUrl?: string; 
}