import { CONTACT } from "../constants";

export default function ContactSection() {
    return (
        <section className="container py-16 mx-auto" id="contact">
            <h6 className="mb-8 text-3xl text-center lg:text-4xl">Contact Us</h6>
            <div className="text-neutral-400">
                {
                    CONTACT.map(detail => (
                        <p key={detail.key} className="pb-12 my-20 text-2xl tracking-tighter text-center border-b-2 border-dotted lg:text-3xl border-neutral-700">{detail.value}</p>
                    ))
                }
            </div>
        </section>
    )
}
