import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"

import Companies from "@/components/common/Companies"
import FAQ from "@/components/common/FAQ"
import Testimonials from "@/components/common/Testimonials"
import { Button } from "@/components/ui/button"
import img from "../../../../../public/events/corporate-meetings/1.png"

const BirthdayAndWeddings = () => {
	return (
		<div>
			<div className=" container m-auto  mt-10 mb-16 ">
				<div className="w-full flex justify-end relative">
					<div className=" bg-primary absolute left-0 top-14 w-[570px] z-40  py-32 px-14 space-y-5">
						<h2 className="text-3xl font-proximanova3">Birthday & Weddings</h2>
						<ul className="font-proximanova3 text-[14px] space-y-5">
							<li>
								At blankspace, we’ve proudly hosted countless birthdays and weddings, becoming a
								go-to venue for those seeking a simple yet cozy design that can be fully customized
								to their vision.{" "}
							</li>
							<li>
								Staying true to our philosophy of “blankspace becomes yourspace”, our venue
								transforms into the perfect setting for your milestone celebrations.{" "}
							</li>
							<li>
								With all furniture and professional AV equipment provided by our team, planning is
								effortless, and your focus stays on the joy of the moment.{" "}
							</li>
							<li>Let us create a space as unique and memorable as your special day.</li>
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

export default BirthdayAndWeddings
