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

const Workshops = () => {
	return (
		<div>
			<div className=" container m-auto  mt-10 mb-16 ">
				<div className="w-full flex justify-end relative">

					<div className=" bg-primary absolute left-0 top-14 w-[570px] z-40  py-32 px-14 space-y-5">
						<h2 className="text-3xl font-proximanova3">Cocktail Receptions</h2>
						<ul className="font-proximanova3 text-[14px] space-y-5">
							<li>Blankspace is the ideal choice for cocktail receptions, offering high tables, a stylish bar area, and a serene garden space that guests love. </li>
							<li>From EU institutions to corporate professionals, our venue is trusted to deliver sophistication and comfort for vibrant gatherings. </li>
							<li> Whether you’re planning an elegant after-work mingle or a celebratory toast, blankspace provides the perfect ambiance. With all furniture, AV, and catering services handled by our team, hosting a seamless event has never been easier.</li>
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

export default Workshops
