import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"

import Companies from "@/components/common/Companies"
import FAQ from "@/components/common/FAQ"
import Testimonials from "@/components/common/Testimonials"
import { Button } from "@/components/ui/button"
import img from "../../../../../public/events/corporate-meetings/1.png"

const CorporateMeetings = () => {
	return (
		<div>
			<div className=" container m-auto  mt-10 mb-16 ">
				<div className="w-full flex justify-end relative">
					<div className=" bg-primary absolute left-0 top-14 w-[570px] z-40  py-32 px-14 space-y-5">
						<h2 className="text-3xl font-proximanova3">Corporate Meetings</h2>
						<ul className="font-proximanova3 text-[14px] space-y-5">
							<li>
								Perfectly located near the EU Commission and with a second venue next to the EU
								Parliament, blankspace is designed for impactful conferences and corporate meetings.
							</li>
							<li>
								Fully equipped with professional AV and a variety of furniture setups, our spaces
								adapt to suit your event needs. Whether it’s an engaging panel discussion or a
								strategic meeting, blankspace fosters focus, collaboration, and success.{" "}
							</li>
							<li>
								Our team ensures every detail is managed, so you can deliver your event with
								confidence.
							</li>
						</ul>
						<Button className="bg-black rounded-none text-white hover:bg-black flex mx-auto h-8 font-proximanova4 p-4 ">
							{" "}
							I would like a quote
						</Button>
					</div>

					<Carousel className="basis-[55.5%]   ">
						<CarouselContent>
							<CarouselItem>
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

export default CorporateMeetings
