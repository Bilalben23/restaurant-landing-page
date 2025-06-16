import { SOCIAL_MEDIA_LINKS } from '../constants';

export default function Footer() {
    return (
        <footer className='mt-20 mb-8'>
            <div className='flex items-center justify-center gap-8'>
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-white'
                        aria-label={link.href || `Social link ${index + 1}`}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>

            <p className='mt-8 tracking-tighter text-center text-neutral-500'>
                &copy; {new Date().getFullYear()} Restaura. All rights reserved.
            </p>
            <p className='mt-2 text-sm text-center text-neutral-600'>
                Made with ❤️ by{' '}
                <a
                    href="https://www.linkedin.com/in/bilal-ben-youssef-b38a27251"
                    className='text-blue-500 underline'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Bilal Ben Youssef
                </a>
            </p>
        </footer>
    )
}
