import { CUISINES } from "../constants";
import { motion } from "framer-motion";


const ContainerVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 1
        }
    }
}

const ItemVariants = {
    hidden: {
        hidden: {
            opacity: 0,
            y: 20
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    }
}


export default function Expertise() {
    return (
        <section className="p-5" id="expertise">
            <h5 className="my-8 text-3xl tracking-tighter text-center lg:text-4l">Our Expertise</h5>
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={ContainerVariants}
                className="container mx-auto">
                {
                    CUISINES.map((cuisine, index) => (
                        <motion.div
                            key={index}
                            variants={ItemVariants}
                            className="flex items-center py-2 border-b-2 border-dotted border-neutral-700/40">
                            <p className="pr-8 text-2xl shrink-0">{cuisine.number}</p>
                            <div className="w-1/3 shrink-0">
                                <img
                                    src={cuisine.image}
                                    alt={cuisine.title}
                                    className="h-auto rounded-3xl"
                                    loading="lazy"
                                />

                            </div>
                            <div className="pl-8">
                                <p className="text-2xl tracking-tighter uppercase text-rose-300">
                                    {cuisine.title}
                                </p>
                                <p className="mt-4 text-lg tracking-tighter">
                                    {cuisine.description}
                                </p>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </section>
    )
}
