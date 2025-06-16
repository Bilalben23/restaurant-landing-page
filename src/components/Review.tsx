import { REVIEW } from '../constants';
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";



export default function Review() {
    return (
        <section className='container p-5 mx-auto mt-12 mb-8' id='review'>

            <div className='flex flex-col'>
                <p className='mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-lg'>
                    {REVIEW.content}
                </p>
                <div className='flex items-center justify-center gap-6'>
                    <img
                        src={xaviour}
                        alt={REVIEW.name}
                        className='border rounded-full size-20'
                    />
                    <div className='tracking-tighter'>
                        <p>{REVIEW.name}</p>
                        <p className='text-sm text-neutral-500'>{REVIEW.profession}</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-4 mt-14 md:flex-row'>
                {
                    [customer1, customer2, customer3, customer4].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`customer${index}`}
                            className='aspect-[16/11] w-full md:w-80 object-cover rounded-tl-3xl rounded-br-3xl'
                            loading='lazy'
                        />
                    ))
                }
            </div>
        </section>
    )
}
