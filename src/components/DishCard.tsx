import { type FC } from 'react'


type DishCardProps = {
    image: string;
    title: string;
    description: string
}


const DishCard: FC<DishCardProps> = ({ image, title, description }) => {
    return (
        <div>
            <img
                src={image}
                alt={title}
                className='p-2 rounded-3xl'
            />
            <div className="p-2">
                <p className='mb-2 text-2xl font-bold tracking-tighter'>{title}</p>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    )
}


export default DishCard;
