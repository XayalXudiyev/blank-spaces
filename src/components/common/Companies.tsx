"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Earma from "../../../public/companies/earma.svg"
import Ellis from "../../../public/companies/ellis.svg"
import Esae from "../../../public/companies/esae.svg"
import EuroCommerce from "../../../public/companies/euro-commerce.svg"
import KevinMurphy from "../../../public/companies/kevin-murphy.svg"
import OliverWyman from "../../../public/companies/oliver-wyman.svg"
import SolarPower from "../../../public/companies/solar-power.svg"
import Una from "../../../public/companies/una.svg"

const companyLogos = [
	{ src: EuroCommerce, alt: "EuroCommerce" },
	{ src: Esae, alt: "Esae" },
	{ src: OliverWyman, alt: "Oliver Wyman" },
	{ src: Earma, alt: "Earma" },
	{ src: SolarPower, alt: "Solar Power" },
	{ src: Una, alt: "Una" },
	{ src: Ellis, alt: "Ellis" },
	{ src: KevinMurphy, alt: "Kevin Murphy" },
]

const Companies = () => {
	return (
		<Carousel
			opts={{
				align: "start",
				loop: false,
			}}
			plugins={[
				Autoplay({
					delay: 2000,
				}),
			]}
		>
			<CarouselContent className=" select-none mt-10">
				{companyLogos.map((company, index) => (
					<CarouselItem key={index} className="basis-1/5  flex justify-center items-center ">
						<Image
							src={company.src}
							alt={company.alt}
							className="object-contain w-56 "
							width={100000}
							height={0}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}

export default Companies
