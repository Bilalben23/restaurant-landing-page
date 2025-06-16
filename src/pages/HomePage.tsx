import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'

export default function HomePage() {
    return (
        <main className='overflow-y-hidden text-neutral-200 antialiased'>
            <Navbar />
            <HeroSection />
        </main>
    )
}
