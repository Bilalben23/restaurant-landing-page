import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";


export default function About() {
    return (
        <section className="container p-5 mx-auto mb-8" id="about">
            <h3 className="mb-8 text-3xl tracking-tighter text-center lg:text-4xl">About Us</h3>

            <div className="flex flex-wrap">
                <div className="w-full py-4 md:px-4 md:w-1/2">
                    <img
                        src={about}
                        alt="Chefs cook"
                        className="rounded-3xl lg:-rotate-3"
                        loading="lazy"
                    />
                </div>
                <div className="w-full px-2 lg:w-1/2">
                    <motion.p
                        initial={{ opacity: 1, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl tracking-tighter lg:text-6xl"
                    >{ABOUT.header}</motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="h-2 mt-1 mb-8 w-36 lg:-rotate-3 bg-rose-300"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="m-8 text-2xl leading-tight lg:max-w-xl"
                    >{ABOUT.content}</motion.p>
                </div>
            </div>
        </section>
    )
}
