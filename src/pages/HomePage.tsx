import About from '../components/About';
import Dishes from '../components/Dishes';
import HeroSection from '../components/HeroSection';
import Mission from '../components/Mission';
import Navbar from '../components/Navbar';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <main className='overflow-x-hidden antialiased text-neutral-200'>
                <Dishes />
                <About />
                <Mission />
            </main>
        </>
    )
}
