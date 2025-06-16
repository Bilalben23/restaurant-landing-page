import { REVIEW } from '../constants';
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import { motion } from "framer-motion";


const ContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8
        }
    }
}


const ItemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}


export default function Review() {
    return (
        <section className='container p-5 mx-auto mt-12 mb-8' id='review'>

            <motion.div
                initial="hidden"
                whileInView="show"
                variants={ContainerVariants}
                viewport={{ once: true }}
                className='flex flex-col'
            >
                <motion.p
                    variants={ItemVariants}
                    className='mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-lg'
                >
                    {REVIEW.content}
                </motion.p>
                <motion.div
                    variants={ItemVariants}
                    className='flex items-center justify-center gap-6'
                >
                    <img
                        src={xaviour}
                        alt={REVIEW.name}
                        className='border rounded-full size-20'
                    />
                    <div className='tracking-tighter'>
                        <p>{REVIEW.name}</p>
                        <p className='text-sm text-neutral-500'>{REVIEW.profession}</p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="show"
                variants={ItemVariants}
                viewport={{ once: true }}
                className='flex flex-col items-center justify-center gap-4 mt-14 md:flex-row'>
                {
                    [customer1, customer2, customer3, customer4].map((img, index) => (
                        <motion.img
                            variants={ItemVariants}
                            key={index}
                            src={img}
                            alt={`customer${index}`}
                            className='aspect-[16/11] w-full md:w-80 object-cover rounded-tl-3xl rounded-br-3xl'
                            loading='lazy'
                        />
                    ))
                }
            </motion.div>
        </section>
    )
}
