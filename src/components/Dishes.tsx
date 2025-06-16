import { DISHES } from '../constants'
import DishCard from './DishCard'

export default function Dishes() {
    return (
        <section className='container py-16 px-5 mx-auto' id='dishes'>
            <h2 className='mb-8 text-3xl tracking-tighter text-center'>Our Dishes</h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                {
                    DISHES.map((dish, index) => <DishCard
                        key={index}
                        image={dish.image}
                        title={dish.title}
                        description={dish.description}
                    />)
                }
            </div>
        </section>
    )
}
