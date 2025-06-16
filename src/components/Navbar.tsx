import { useState, type MouseEvent } from 'react';
import logo from "../assets/logo.png";
import { LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const handleScroll = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault();

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            })
        }
        setIsMobileMenuOpen(false);
    }


    return (
        <header className='fixed z-50 flex items-center justify-center w-full antialiased top-3 text-neutral-200'>
            <div className='relative flex items-center justify-between w-full p-6 gap-x-8 md:shadow-lg md:rounded-full md:max-w-2xl lg:max-w-3xl backdrop-blur-xl'>
                <div>
                    <img
                        src={logo}
                        alt="logo"
                        height={22}
                        width={80}
                    />
                </div>

                {/*Menu for desktop */}
                <nav className='hidden md:block'>
                    <ul className='flex items-center gap-x-4'>
                        {
                            LINKS.map(link => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        className='p-2 capitalize transition hover:opacity-70 border-neutral-300/20'
                                        onClick={(e) => handleScroll(e, link.id)}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                {/*Phone menu */}
                <div className='md:hidden'>
                    <button type="button" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                    </button>


                    <nav className={`absolute p-4 backdrop-blur-xl left-0 w-full top-20 transition-transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <ul className='flex flex-col w-full gap-y-4'>
                            {
                                LINKS.map(link => (
                                    <li key={link.id}>
                                        <a
                                            href={`#${link.id}`}
                                            className='p-2 transition hover:opacity-70 border-neutral-300/20'
                                            onClick={(e) => handleScroll(e, link.id)}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    )
}
