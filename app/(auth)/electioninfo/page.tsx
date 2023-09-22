import Image from "next/image";
import Event_1 from "@/public/images/event_1.png";
import Event_2 from "@/public/images/event_2.png";
import Event_3 from "@/public/images/event_3.png";

export const metadata = {
    title: 'Electioninfo - Simple',
    description: 'Electioninfo description',
}

import Link from 'next/link'


export default function Page() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="py-12 md:py-20">
                            {/* Section header */}
                            <div className="relative inline-flex flex-col">
                                <Image className="md:max-w-none mx-auto rounded" src={Event_1} width={1000} height="600" alt="Event_1" />
                                {/*<Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />*/}
                            </div>
                            <div className="relative inline-flex flex-col">
                                <Image className="md:max-w-none mx-auto rounded" src={Event_2} width={1000} height="600" alt="Event_2" />
                                {/*<Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />*/}
                            </div>
                            <div className="relative inline-flex flex-col">
                                <Image className="md:max-w-none mx-auto rounded" src={Event_3} width={1000} height="600" alt="Event_3" />
                                {/*<Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />*/}
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}