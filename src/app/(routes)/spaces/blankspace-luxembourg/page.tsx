import ContactForm from "@/components/common/SendRequest"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"
import Component1 from "../../../../../public/spaces/carousel/Component10.png"
import Component2 from "../../../../../public/spaces/carousel/Component11.png"
import Component3 from "../../../../../public/spaces/carousel/Component12.png"
import Icons from "../../../../../public/spaces/icons.svg"
import IMG from "../../../../../public/spaces/luxeburg.svg"

const CarouselItems = [
	{ image: Component1, title: "Component1" },
	{ image: Component2, title: "Component2" },
	{ image: Component3, title: "Component3" },
]

const BlankspaceLuxembourg = () => {
	const t = useTranslations("spaces")

	return (
		<div className="  relative">
			<div className="md:min-h-[490px] relative text-white">
				<div className=" ">
					<Image src={IMG} alt="Blankspace Schuman" width={10000} height={10000} className="" />
				</div>
				<div className=" bg-[#1C1C1C]">
					<div className="flex">
						<h2 className="absolute w-[90%] font-proximanova5 mb-4 top-[13%] left-16 text-[3.5rem] flex flex-col">
							<span>Blankspace Place</span>
							<span className="absolute left-[15%] top-[90%]">du Luxembourg</span>
						</h2>
						<div className="absolute right-0 tracking-wide top-72  w-1/2  font-proximanova3">
							<h4 className=" text-[1.9rem]  mb-4">{t("flexibleSpace")}</h4>
							<p className="text-sm w-[92%] leading-5">{t("flexibleSpaceText")}</p>
							<Button
								size={"sm"}
								className=" font-proximanova4 mt-6  bg-transparent hover:bg-transparent border border-white rounded-none "
							>
								{t("eventButton")}
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#1C1C1C] text-white">
				<div className="tracking-wide  w-1/2 font-proximanova3 py-16 pl-16">
					<h4 className=" text-[1.9rem] pr-5  mb-4">{t("equipped")}</h4>
					<p className="text-sm  leading-5">{t("equippedText")}</p>
				</div>
			</div>

			<div className="flex flex-col">
				<div className="flex pl-8 pr-14 mx-auto py-24 justify-center items-center select-none w-full">
					<div className="ml-7 h-full flex flex-col justify-center w-[60%] bg-primary text-center px-[4rem] py-16 z-30 mr-[-40]">
						<h3 className="font-proximanova3 text-[2rem] mb-3">{t("whyChooseUs")}</h3>
						<Carousel className="w-full">
							<CarouselContent className="font-proximanova3 text-sm">
								<CarouselItem className="px-7">
									<p>{t("whyChooseUsText1")}</p>
								</CarouselItem>
								{/* <CarouselItem className="p-0">
									<p>
										{t("whyChooseUsText2")}
									</p>
								</CarouselItem> */}
								<CarouselItem className="p-0">
									<p>{t("whyChooseUsText3")}</p>
								</CarouselItem>
							</CarouselContent>
							<div className="absolute right-1/2 -bottom-6 transform ">
								<CarouselNext className="bg-transparent hover:bg-transparent" />
								<CarouselPrevious className="bg-transparent hover:bg-transparent" />
								<p className="absolute -bottom-3 left-16"> 01/03</p>
							</div>
						</Carousel>
					</div>
					<div className="w-1/2 flex flex-col items-center relative">
						<Carousel className="w-full">
							<CarouselContent>
								{CarouselItems.map((item, index) => (
									<CarouselItem key={index} className="p-0">
										<Image
											src={item.image}
											alt={item.title}
											width={500}
											height={500}
											className="w-full"
										/>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
						<Image
							src={Icons}
							alt="Icons"
							width={500}
							height={500}
							className="w-80 absolute -bottom-16"
						/>
					</div>
				</div>
			</div>
			<ContactForm />
		</div>
	)
}

export default BlankspaceLuxembourg
