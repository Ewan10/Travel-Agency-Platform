import Navbar from "../layouts/Navbar";
import Hero from "../features/Hero/Hero";
import Destinations from "../features/destinations/components/Destinations";
import PackagesGrid from "../features/packages/components/PackageGrid/PackagesGrid";

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

        <section>itenarary highlight</section>

        <section>reviews</section>

        <section>pricing/promotion</section>

    <footer>footer</footer>
        
    </main>
</>
    );
}