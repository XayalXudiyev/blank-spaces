"use client"

import { Card, CardContent } from "@/components/ui/card"
import useEmblaCarousel from "embla-carousel-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { FaArrowDown, FaArrowUp } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"
import MCI from "../../../public/companies/MCI.svg"
import BelgianRailway from "../../../public/companies/belgianrailway.svg"
import BirthdayParty from "../../../public/companies/birthday-party.svg"
import Casa from "../../../public/companies/casa.svg"
import Earma from "../../../public/companies/earma.svg"
import Eca from "../../../public/companies/eca.svg"
import Ellis from "../../../public/companies/ellis.svg"
import Esae from "../../../public/companies/esae.svg"
import EuroCommerce from "../../../public/companies/euro-commerce.svg"
import EuropeanGreens from "../../../public/companies/european-greens.svg"
import GreenMood from "../../../public/companies/greemood.svg"
import Hilton from "../../../public/companies/hilton.svg"
import KevinMurphyK from "../../../public/companies/kevin-murphy-K.svg"
import KevinMurphy from "../../../public/companies/kevin-murphy.svg"
import Marriage from "../../../public/companies/marriage.svg"
import OliverWyman from "../../../public/companies/oliver-wyman.svg"
import SolarPower from "../../../public/companies/solar-power.svg"
import Una from "../../../public/companies/unaa.png"
import UseBrussel from "../../../public/companies/use-brussels.svg"
import { Button } from "../ui/button"

interface ExpandedState {
	[key: number]: boolean
}

function Testimonials() {
	const t = useTranslations("testimonials")
	const [emblaRef, emblaApi] = useEmblaCarousel({ axis: "y", loop: true })
	const [carouselRef, carouselApi] = useEmblaCarousel({ axis: "y", loop: true })
	const [selectedIndex, setSelectedIndex] = useState(10)
	const [expanded, setExpanded] = useState<ExpandedState>({})

	const testimonials = [
		{
			id: 4,
			author: "",
			icon: EuroCommerce,
			description: t("EuroCommerce"),
		},
		{
			id: 5,
			author: "",
			icon: Ellis,
			description: t("Ellis"),
		},
		{
			id: 6,
			author: "Mercedes Porras",
			icon: KevinMurphyK,
			description: t("KevinMurphyK"),
		},
		{
			id: 7,
			author: "",
			icon: OliverWyman,
			description: t("OliverWyman"),
		},
		{
			id: 8,
			author: "Léa Terrien",
			icon: SolarPower,
			description: t("SolarPower"),
		},
		{
			id: 9,
			author: "Petra Skuljevic",
			icon: EuropeanGreens,
			description: t("EuropeanGreens"),
		},
		{
			id: 10,
			author: "Ann Van den Borne",
			icon: Casa,
			description: t("Casa"),
		},
		{
			id: 11,
			author: "Sadig Alekperov",
			icon: GreenMood,
			description: t("GreenMood"),
		},
		{
			id: 12,
			author: "Malumba & Liliane",
			icon: Marriage,
			description: t("Marriage"),
		},
		{
			id: 13,
			author: "Francesco Cimorelli",
			icon: BirthdayParty,
			description: t("BirthdayParty"),
		},
		{
			id: 14,
			author: "",
			icon: UseBrussel,
			description: t("UseBrussel"),
		},
		{
			id: 15,
			author: "",
			icon: MCI,
			description: t("MCI"),
		},
		{
			id: 16,
			author: "",
			icon: Hilton,
			description: t("Hilton"),
		},
		{
			id: 17,
			author: "",
			icon: BelgianRailway,
			description: t("BelgianRailway"),
		},
		{
			id: 18,
			author: "",
			icon: Eca,
			description: t("Eca"),
		},
		{
			id: 1,
			author: "Johanna Roodt",
			icon: Earma,
			description: t("Earma"),
		},
		{
			id: 2,
			author: "Zoë De Paepe",
			icon: Una,
			description: t("Una"),
		},
		{
			id: 3,
			author: "",
			icon: Esae,
			description: t("Esae"),
		},
	]

	const toggleExpand = (index: number) => {
		setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
	}

	const scrollTo = useCallback(
		(index: number) => {
			emblaApi?.scrollTo(index)
			carouselApi?.scrollTo(index)
		},
		[emblaApi, carouselApi],
	)

	const scrollNext = useCallback(() => {
		emblaApi?.scrollNext()
		carouselApi?.scrollNext()
	}, [emblaApi, carouselApi])

	const scrollPrev = useCallback(() => {
		emblaApi?.scrollPrev()
		carouselApi?.scrollPrev()
	}, [emblaApi, carouselApi])

	const onSelect = useCallback(() => {
		if (!emblaApi) return
		setSelectedIndex(emblaApi.selectedScrollSnap())
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) return
		emblaApi.on("select", onSelect)
	}, [emblaApi, onSelect])

	return (
		<div className="flex my-16  h-[500px] ">
			<div className="w-5/12 bg-white  pr-5 h-full flex justify-center">
				<div className="bg-[#ECE0CF] w-36" />

				<div className="ml-7 h-full flex flex-col items- justify-center">
					<h3 className="font-proximanova3 text-[2rem] mb-3">{t("WhatOutClientsSay")}</h3>
					<p className="text-sm font-proximanova3 flex flex-col">
						<span>{t("WhatOutClientsSayText1")}</span>
						<span>{t("WhatOutClientsSayText2")}</span>
					</p>
				</div>
			</div>

			<div className="w-7/12 pr-16 pl-20 bg-white relative">
				<div className="absolute top-[7rem] -ml-16  flex flex-col items-center justify-center">
					<Button onClick={scrollPrev} className="bg-transparent hover:bg-transparent text-black">
						<FaArrowUp size={20} />
					</Button>

					<div className="flex flex-col items-center space-y-1">
						<div className="overflow-hidden" ref={carouselRef}>
							<div className="flex flex-col h-[240px] ">
								{testimonials.map((tml, index) => (
									<Button
										key={index}
										onClick={() => scrollTo(index)}
										className={`rounded-full w-8 h-8 text-sm font-proximanova3 flex items-center justify-center text-black hover:bg-transparent font-medium ${
											index === selectedIndex
												? "bg-transparent font-proximanova5 text-base "
												: " bg-transparent "
										}`}
									>
										{tml.id}
									</Button>
								))}
							</div>
						</div>
					</div>

					<Button onClick={scrollNext} className="bg-transparent hover:bg-transparent text-black">
						<FaArrowDown size={20} />
					</Button>
				</div>
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex flex-col h-[500px]">
						{testimonials.map((tml, index) => (
							<div key={tml.id} className="mx-5 p-4">
								<Card
									className={`bg-[#ECE0CF] rounded-none h-[8.5rem] text-sm font-proximanova3 transition-all duration-1000 ${
										index % 2 === 0 ? "rotate-[2deg]" : "-rotate-[2deg]"
									} ${expanded[index] ? "h-[28rem]" : "h-[8.5rem]"}`}
								>
									<CardContent className="flex flex-col items-center justify-center h-full text-center py-4 z-50 w-full">
										<div
											className={`overflow-hidden transition-all duration-1000 ease-in-out mb-1 ${
												expanded[index] ? "h-full" : "h-[8.5rem]"
											}`}
										>
											<p>{tml.description}</p>
										</div>

										<div className="flex w-1/2 ml-auto justify-between">
											<Button
												className="p-0 h-fit bg-transparent hover:bg-transparent text-black text-xs font-proximanova4"
												onClick={() => toggleExpand(index)}
											>
												<span>{expanded[index] ? "Less" : "More"}</span>{" "}
												<IoIosArrowDown
													size={20}
													className={`${
														expanded[index] && "rotate-180 transition-all duration-1000"
													}`}
												/>
											</Button>
											<div>{tml.author}</div>
										</div>
										<span
											className={`absolute bg-white rounded-full w-[3.6rem] h-[3.6rem] p-1 flex shadow-[0_4px_10px_rgba(0,0,0,0.25)] ${
												index % 2 === 0 ? "-left-[6%]" : "-right-[6%]"
											}`}
										>
											<Image
												width={0}
												height={0}
												src={tml.icon}
												alt={tml.author}
												className="p-1 flex items-center justify-center"
											/>
										</span>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
