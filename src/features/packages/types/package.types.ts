export type TravelPackage = {
    id: number;
    title: string;
    destination: string;
    duration: string;
    difficulty: "Easy" | "Moderate" | "Advanced";
    price: number;
    rating: number;
    imageUrl: string;
};