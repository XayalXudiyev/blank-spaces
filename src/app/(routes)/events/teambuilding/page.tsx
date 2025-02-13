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

const Teambuilding = () => {
	return (
		<div>
			<div className=" container m-auto  mt-10 mb-16 ">
				<div className="w-full flex justify-end relative">

					<div className=" bg-primary absolute left-0 top-14 w-[570px] z-40  py-32 px-14 space-y-5">
						<h2 className="text-3xl font-proximanova3">Teambuilding</h2>
						<ul className="font-proximanova3 text-[14px] space-y-5">
							<li>Blankspace offers endless team-building possibilities, from engaging culinary battles like the US Embassy's "Battle of Belgian and American Chefs" to creative and collaborative activities.</li>
							<li>Let us create a unique experience for your team. Our bright, adaptable spaces inspire connection and productivity, no matter the challenge or theme. </li>
							<li>With every detail handled by our expert team, you can focus on building stronger bonds and lasting memories.</li>
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

export default Teambuilding
