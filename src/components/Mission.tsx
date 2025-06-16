import missionImg from "../assets/mission.jpeg";
import missionVid from "../assets/mission.mp4";
import { MISSION } from "../constants";
import { motion } from "framer-motion";


export default function Mission() {
    return (
        <section className="p-5" id='mission'>
            <div className="container mx-auto text-center">
                <h4 className='mb-8 text-3xl lg:text-4xl'>Our Mission</h4>

                <div className='relative flex items-center justify-center'>
                    <motion.video
                        autoPlay
                        muted
                        playsInline
                        loop
                        poster={missionImg}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full rounded-3xl"
                    >
                        <source src={missionVid} type="video/mp4" />
                    </motion.video>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="absolute bg-black/40 size-full rounded-3xl"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute max-w-lg tracking-tighter lg:text-3xl">
                        {MISSION}
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
