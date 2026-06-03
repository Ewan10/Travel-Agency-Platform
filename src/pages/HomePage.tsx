import Navbar from "../layouts/Navbar";
import Hero from "../features/hero/Hero";
import Destinations from "../features/destinations/components/Destinations";
import PackagesGrid from "../features/packages/components/PackageGrid/PackagesGrid";
import Reviews from "../features/reviews/components/Reviews";
import ItineraryHighlights from "../features/itineraries/components/ItineraryHighlights";
import Newsletter from "../features/newsletter/Newsletter";
import Footer from "../layouts/Footer";

export default function HomePage() {
    return (
<>
    <header>
        <Navbar />
    </header>

    <main>
        <Hero />

        <section>
            <Destinations />
        </section>

        <section><PackagesGrid /></section>

        <section></section>

        <section><ItineraryHighlights /></section>
        
        <section><Reviews /></section>

        <section><Newsletter /></section>

    <footer><Footer /></footer>
        
    </main>
</>
    );
}