import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jpeg";
import { motion } from "framer-motion";


export default function HeroSection() {
    return (
        <section className='relative flex items-center justify-center h-screen antialiased text-neutral-200'>
            <div className="absolute inset-0 overflow-hidden -z-20 size-full">
                <video
                    autoPlay
                    loop
                    playsInline
                    poster={hero}
                    muted src={video}
                    className="object-cover size-full"
                >
                </video>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-70% to-black"></div>
            <div className="relative z-20 flex flex-col justify-end h-screen pb-20">
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    src={logo}
                    alt="restaura"
                    className="w-full p-4"
                />
                <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
            </div>
        </section>
    )
}
