import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"

import Companies from "@/components/common/Companies"
import FAQ from "@/components/common/FAQ"
import Testimonials from "@/components/common/Testimonials"
import { Button } from "@/components/ui/button"
import img from "../../../../../public/events/corporate-meetings/1.png"

const Workshops = () => {
	return (
		<div>
			<div className=" container m-auto  mt-10 mb-16 ">
				<div className="w-full flex justify-end relative">
					<div className=" bg-primary absolute left-0 top-14 w-[570px] z-40  py-32 px-14 space-y-5">
						<h2 className="text-3xl font-proximanova3">Workshops</h2>
						<ul className="font-proximanova3 text-[14px] space-y-5">
							<li>
								In partnership with top professionals listed on our website, blankspace provides a
								versatile setting for workshops.{" "}
							</li>
							<li>
								Fully equipped and adaptable, our spaces inspire creativity and focus for learning,
								crafting, and innovating.{" "}
							</li>
							<li>
								From hands-on art sessions to thought-provoking seminars, blankspace supports every
								aspect of your workshop.{" "}
							</li>
							<li>
								With professional AV and all necessary furniture on-site, your event will be
								seamless and engaging.
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

export default Workshops
