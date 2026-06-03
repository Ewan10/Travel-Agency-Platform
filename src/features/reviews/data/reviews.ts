import type { Review } from "../types/reviews.types";

export const reviews: Review[] = [
    {
        id: "1",
        username: "Jean Paul",
        destination: "Honolulu, Hawaii",
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nuncefficitur tincidunt.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        rating: 5,
        avatarUrl: "/review2.jpg"
    },
    {
        id: "2",
        username: "Luciano Marquez",
        destination: "Bali, Indonesia",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nuncefficitur tincidunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        rating: 4,
        avatarUrl: "/review3.jpg"
    },
    {
        id: "3",
        username: "Lucio Rossi",
        destination: "Polynesia, French Polynesia",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nuncefficitur tincidunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        rating: 5,
        avatarUrl: "/review1.jpg"
    }
];