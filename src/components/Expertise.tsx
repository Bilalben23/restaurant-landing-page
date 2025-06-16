import { CUISINES } from "../constants";

export default function Expertise() {
    return (
        <section id="expertise">
            <h5 className="my-8 text-3xl tracking-tighter text-center lg:text-4l">Our Expertise</h5>
            <div className="container mx-auto">
                {
                    CUISINES.map((cuisine, index) => (
                        <div key={index} className="flex items-center py-2 border-b-2 border-dotted border-neutral-700/40">
                            <p className="pr-8 text-2xl shrink-0">{cuisine.number}</p>
                            <div className="w-1/3 shrink-0">
                                <img
                                    src={cuisine.image}
                                    alt={cuisine.title}
                                    className="h-auto rounded-3xl"
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
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
