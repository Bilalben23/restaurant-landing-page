import missionImg from "../assets/mission.jpeg";
import missionVid from "../assets/mission.mp4";
import { MISSION } from "../constants";

export default function Mission() {
    return (
        <section className="p-5" id='mission'>
            <div className="container mx-auto text-center">
                <h4 className='mb-8 text-3xl lg:text-4xl'>Our Mission</h4>

                <div className='relative flex items-center justify-center'>
                    <video
                        autoPlay
                        muted
                        playsInline
                        poster={missionImg}
                        className="w-full rounded-3xl"
                    >
                        <source src={missionVid} type="video/mp4" />
                    </video>
                    <div className="absolute bg-black/40 size-full rounded-3xl"></div>
                    <p className="absolute max-w-lg tracking-tighter lg:text-3xl">
                        {MISSION}
                    </p>
                </div>
            </div>
        </section>
    )
}
