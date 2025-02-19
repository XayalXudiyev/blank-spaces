"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import BelgianRailway from "../../../public/companies/belgianrailway.svg"
import BirthdayParty from "../../../public/companies/birthday-party.svg"
import Casa from "../../../public/companies/casa.svg"
import Earma from "../../../public/companies/earma.svg"
import Eca from "../../../public/companies/eca.svg"
import Ellis from "../../../public/companies/ellis.svg"
import Esae from "../../../public/companies/esae.svg"
import EuroCommerce from "../../../public/companies/euro-commerce.svg"
import EuropeanGreens from "../../../public/companies/european-greens.svg"
import Greenmood from "../../../public/companies/greemood.svg"
import Hilton from "../../../public/companies/hilton.svg"
import KevinMurphy from "../../../public/companies/kevin-murphy-K.svg"
import Marriage from "../../../public/companies/marriage.svg"
import MCI from "../../../public/companies/MCI.svg"
import OliverWyman from "../../../public/companies/oliver-wyman.svg"
import SolarPower from "../../../public/companies/solar-power.svg"
import Una from "../../../public/companies/una.svg"
import USEBrussel from "../../../public/companies/use-brussels.svg"


const companyLogos = [
	{ src: BelgianRailway, alt: "Belgian Railway" },
	{ src: BirthdayParty, alt: "Birthday Party" },
	{ src: Casa, alt: "Casa" },
	{ src: Earma, alt: "Earma" },
	{ src: Eca, alt: "Eca" },
	{ src: Ellis, alt: "Ellis" },
	{ src: Esae, alt: "Esae" },
	{ src: EuroCommerce, alt: "EuroCommerce" },
	{ src: EuropeanGreens, alt: "European Greens" },
	{ src: Greenmood, alt: "Greenmood" },
	{ src: Hilton, alt: "Hilton" },
	{ src: KevinMurphy, alt: "Kevin Murphy" },
	{ src: Marriage, alt: "Marriage" },
	{ src: MCI, alt: "MCI" },
	{ src: OliverWyman, alt: "Oliver Wyman" },
	{ src: SolarPower, alt: "Solar Power" },
	{ src: Una, alt: "Una" },
	{ src: USEBrussel, alt: "USE Brussel" },
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
