import type { TravelPackage } from "../types/package.types";

export const packages: TravelPackage[] = [
    {
        id: 1,
        title: "Tropical Paradise",
        destination: "Bali, Indonesia",
        duration: "7 days",
        difficulty: "Moderate",
        price: 1200,
        rating: 5,
        imageUrl: "/pacific1.jpg"
    },
    {
        id: 2,
        title: "Indian Enchantment",
        destination: "Maldives",
        duration: "10 days",
        difficulty: "Easy",
        price: 1500,
        rating: 5,
        imageUrl: "/indianOcean1.jpg"
    },
    {
        id: 3,
        title: "Thrilling Shores",
        destination: "Hawaii, USA",
        duration: "5 days",
        difficulty: "Advanced",
        price: 1000,
        rating: 4.7,
        imageUrl: "/shores1.jpg"
    },
    {
        id: 4,
        title: "Breathtaking Mountains",
        destination: "Wanaka, New Zealand",
        duration: "8 days",
        difficulty: "Moderate",
        price: 1300,
        rating: 5,
        imageUrl: "/mountain.jpg"
    },
    {
        id: 5,
        title: "Carribean Dream",
        destination: "Sint Bartholomew",
        duration: "6 days",
        difficulty: "Easy",
        price: 1100,
        rating: 4.8,
        imageUrl: "/carribean1.jpg"
    },
    {
        id: 6,
        title: "Exotic Islands",
        destination: "Tahivalu, French Polynesia",
        duration: "9 days",
        difficulty: "Advanced",
        price: 1400,
        rating: 4.5,
        imageUrl: "/islands1.jpg"
    }
];