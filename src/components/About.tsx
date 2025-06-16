import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";

export default function About() {
    return (
        <section className="container mx-auto mb-8 p-5" id="about">
            <h3 className="mb-8 text-3xl tracking-tighter text-center lg:text-4xl">About Us</h3>

            <div className="flex flex-wrap">
                <div className="w-full py-4 md:px-4 md:w-1/2">
                    <img
                        src={about}
                        alt="Chefs cook"
                        className="rounded-3xl lg:-rotate-3"
                    />
                </div>
                <div className="w-full px-2 lg:w-1/2">
                    <p className="text-4xl tracking-tighter lg:text-6xl">{ABOUT.header}</p>
                    <div className="h-2 mt-1 mb-8 w-36 lg:-rotate-3 bg-rose-300"></div>
                    <p className="m-8 text-2xl leading-tight lg:max-w-xl">{ABOUT.content}</p>
                </div>
            </div>
        </section>
    )
}
