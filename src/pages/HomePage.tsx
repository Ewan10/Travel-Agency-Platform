import Navbar from "../layouts/Navbar";
import Hero from "../features/hero-temp/Hero";
import Destinations from "../features/destinations/components/Destinations";
import PackagesGrid from "../features/packages/components/PackageGrid/PackagesGrid";
import Reviews from "../features/reviews/components/Reviews";

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

        <section><Reviews /></section>

        <section>pricing/promotion</section>

    <footer>footer</footer>
        
    </main>
</>
    );
}