import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"
import Image from "next/image"

import img from "../../../../../public/events/corporate-meetings/1.png"
import { Button } from "@/components/ui/button"
import Companies from "@/components/common/Companies"
import Testimonials from "@/components/common/Testimonials"
import FAQ from "@/components/common/FAQ"

const ProductLaunches = () => {
    return (
        <div>
            <div className=" container m-auto  mt-10 mb-16 ">
                <div className="w-full flex justify-end relative">

                    <div className=" bg-primary absolute left-0 top-14 w-[570px] z-40  py-32 px-14 space-y-5">
                        <h2 className="text-3xl font-proximanova3">Product Launches</h2>
                        <ul className="font-proximanova3 text-[14px] space-y-5">
                            <li>
                                From Casa Belgium’s 2024 Spring Collection to Kevin Murphy product showcases, blankspace has become a hub for impactful product launches.
                            </li>
                            <li>Whether you're unveiling innovations or celebrating milestones, our spaces elevate your brand’s story. </li>

                            <li>Impress your audience with the perfect blend of professional AV, flexible layouts, and a modern aesthetic. </li>
                            <li>Blankspace ensures your products shine in the spotlight they deserve.</li>
                        </ul>
                        <Button className="bg-black rounded-none text-white hover:bg-black flex mx-auto h-8 font-proximanova4 p-4 "> I would like a quote</Button>
                    </div>

                    <Carousel className="basis-[55.5%]   ">
                        <CarouselContent >
                            <CarouselItem >
                                <Image src={img} height={0} width={0} alt="Img" className="" />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
            <Companies />
            <Testimonials />
            <FAQ />
        </div>
    )
}

export default ProductLaunches
