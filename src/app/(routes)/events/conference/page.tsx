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

const Conference = () => {
	return (
		<div>
			<div className=" container m-auto  mt-10 mb-16 ">
				<div className="w-full flex justify-end relative">

					<div className=" bg-primary absolute left-0 top-14 w-[570px] z-40  py-32 px-14 space-y-5">
						<h2 className="text-3xl font-proximanova3">Conferences</h2>
						<ul className="font-proximanova3 text-[14px] space-y-5">
							<li>Blankspace has successfully hosted a variety of conferences, offering fully equipped rooms with high-quality screens, monitors, projectors, speakers, fiber-optic Wi-Fi, and wireless microphones. </li>
							<li>Both Blankspace Schuman and Blankspace Place du Luxembourg are ideal venues for such events, featuring flexible layouts, all the necessary technology, and a professional setup to ensure seamless execution. </li>
							<li>With our competitive pricing and proven track record of hosting events like corporate seminars and panel discussions, we are the perfect choice for your next conference.</li>
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

export default Conference
