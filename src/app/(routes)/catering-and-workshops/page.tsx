import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import React from "react"
import IMG from "../../../../public/catering/Picture.png"

const CateringAndWorkshops = () => {
	return (
		<div className="w-full ">
			<div className="flex py-16 pr-40 h-full bg-primary w-full ">
				<div className="w-full  flex flex-col justify-center space-y-3  bg-white  px-16 py-10 ">
					<p className="mt-4 text-lg  font-proximanova4">CULINARY PERFECTION</p>
					<p className="text-[33px] pb-4 font-proximanova3">Blank Catering</p>
					<div className="flex flex-col space-y-5 text-sm font-proximanova3">
						<p className="">
							{" "}
							Discover blankcatering – your destination for exceptional breakfasts, sandwich
							lunches, and refreshing coffee and tea breaks.
						</p>
						<p>
							Start your morning with freshly baked croissants, flavorful fruits, yogurt & granola
							bowls, and heavenly pain au chocolat, perfectly paired with sustainable Nespresso
							coffee and premium Sri Lankan Dilmah tea. For lunch, enjoy our handcrafted sandwiches,
							made with the finest ingredients and bursting with flavor.
						</p>
						<p>
							Whether it’s a quick bite, a corporate meeting, or a casual gathering, blankcatering
							elevates every occasion with delectable offerings and sustainable beverages crafted to
							perfection. Taste the difference, one bite and sip at a time.
						</p>
					</div>
				</div>
				{/* Image Section */}
				<div className="= h-auto w-[730px]">
					<Image src={IMG} alt="Catering" width={10000} height={1000} />
				</div>
			</div>

			<div className="w-full flex flex-col justify-center items-center bg-white py-16">
				<h2 className="text-4xl font-proximanova3 text-center">Our Trusted Cateers</h2>

				<div className="w-[100vw] flex justify-center items-center mt-10 px-16  mx-auto select-none">
					<Carousel className="w-full ">
						<CarouselContent>
							{Array.from({ length: 5 }).map((_, index) => (
								<CarouselItem key={index} className="basis-1/3">
									<div className="p-1">
										<Image src={IMG} alt="Catering" width={10000} height={1000} />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
			<div className="flex py-16 pl-40 h-full bg-primary w-full ">
				<div className="= h-auto w-[730px]">
					<Image src={IMG} alt="Catering" width={10000} height={1000} />
				</div>
				<div className="w-full  flex flex-col justify-center space-y-3  bg-white  px-16 py-10 ">
					<p className="mt-4 text-lg  font-proximanova4">CULINARY PERFECTION</p>
					<p className="text-[33px] pb-4 font-proximanova3">Blank Catering</p>
					<div className="flex flex-col space-y-5 text-sm font-proximanova3">
						<p className="">
							{" "}
							Discover blankcatering – your destination for exceptional breakfasts, sandwich
							lunches, and refreshing coffee and tea breaks.
						</p>
						<p>
							Start your morning with freshly baked croissants, flavorful fruits, yogurt & granola
							bowls, and heavenly pain au chocolat, perfectly paired with sustainable Nespresso
							coffee and premium Sri Lankan Dilmah tea. For lunch, enjoy our handcrafted sandwiches,
							made with the finest ingredients and bursting with flavor.
						</p>
						<p>
							Whether it’s a quick bite, a corporate meeting, or a casual gathering, blankcatering
							elevates every occasion with delectable offerings and sustainable beverages crafted to
							perfection. Taste the difference, one bite and sip at a time.
						</p>
					</div>
				</div>
			</div>

			<div className="w-full flex flex-col justify-center items-center bg-white py-16">
				<h2 className="text-4xl font-proximanova3 text-center">Our Trusted Cateers</h2>

				<div className="w-[100vw] flex justify-center items-center mt-10 px-16  mx-auto select-none">
					<Carousel className="w-full ">
						<CarouselContent>
							{Array.from({ length: 5 }).map((_, index) => (
								<CarouselItem key={index} className="basis-1/3">
									<div className="p-1">
										<Image src={IMG} alt="Catering" width={10000} height={1000} />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</div>
	)
}

export default CateringAndWorkshops
