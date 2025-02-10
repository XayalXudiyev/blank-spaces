"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6"
import You1 from "../../../public/youcanimage/you1.png"
import You2 from "../../../public/youcanimage/you2.png"
import You3 from "../../../public/youcanimage/you3.png"
import You4 from "../../../public/youcanimage/you4.png"
import You5 from "../../../public/youcanimage/you5.png"
import You6 from "../../../public/youcanimage/you6.png"
import You7 from "../../../public/youcanimage/you7.png"

import Spaces1 from "../../../public/spaces/host-anywhere.png"
import Spaces2 from "../../../public/spaces/host-anywhere2.png"

import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useEffect, useState } from "react"

const services = [
	{ id: 1, service: "Corporate meetings", image: You1 },
	{ id: 2, service: "Coctail receptions", image: You2 },
	{ id: 3, service: "Teambuildings", image: You3 },
	{ id: 4, service: "Workshops", image: You4 },
	{ id: 5, service: "Conference", image: You5 },
	{ id: 6, service: "Product launches", image: You6 },
	{ id: 7, service: "Borthday & Weddings", image: You7 },
]

const spaces = [
	{
		id: 1,
		name: "Blankspace Schuman",
		image: Spaces1,
		link: "/spaces/blankspace-schuman",
		desc: "Blankspace Brussels is a unique, customizable event venue nestled in a charming townhouse in the quiet EU district of central Brussels. Perfect for medium-sized business or private events, Blankspace offers unmatched versatility, flexibility, and a welcoming atmosphere.",
	},
	{
		id: 2,
		name: "Blankspace Place du Luxembourg",
		image: Spaces2,
		link: "/spaces/blankspace-luxembourg",
		desc: " Blankspace Place du Luxembourg is a fully equipped event venue ideally situated next to the EU Parliament and the vibrant Place du Luxembourg. Designed to host conferences, seminars, and business meetings, it offers a versatile and professional setting for medium to large-sized groups. With its prime location and modern amenities, Blankspace Place du Luxembourg ensures a seamless and memorable event experience.",
	},
]

const OurConcept = () => {
	const [activeService, setActiveService] = useState(services[0])
	const [activeSpace, setActiveSpace] = useState(spaces[0])
	const [autoPlayEnabled, setAutoPlayEnabled] = useState(true)

	useEffect(() => {
		if (!autoPlayEnabled) return
		const interval = setInterval(() => {
			setActiveService((prev) => {
				const currentIndex = services.findIndex((s) => s.id === prev.id)
				const nextIndex = (currentIndex + 1) % services.length
				return services[nextIndex]
			})
		}, 3000)

		return () => clearInterval(interval)
	}, [autoPlayEnabled])

	return (
		<div className="">
			{/* Our Concept */}
			<div className="flex gap-5 items-center my-36 px-16">
				<Image
					src={"/our-concept.png"}
					alt="our-concept"
					width={1000}
					height={0}
					className="w-1/2 "
				/>
				<div className="text-center w-1/2 ">
					<h3 className="font-proximanova3 text-[2rem] mb-3 ">Our Concept</h3>
					<p className="text-sm font-proximanova3 ">
						The name says it all: blankspace <br />
						Like a blank piece of paper, a neutral space where you can determine the color and style{" "}
						<br /> yourself. <br />
						At first glance, the space appears empty. Apart from the bar counter placed in front of
						the window, which also serves as a welcome desk, and some white frames on the walls and
						original plant decoration on the ceiling. <br />
						The empty blankspace is therefore ideal for determining how you will use the space
						whether it is meeting room Brussels / conference room or any other dedicated event. The
						white walls make the space multifunctional; it can be projected, digitally written or
						pasted and a sliding wall can be used to divide the space.
					</p>
				</div>
			</div>

			{/* Services */}
			<div className="flex gap-5 items-center px-16">
				<div className="w-1/2">
					<h3 className="font-proximanova3 text-[2rem] mb-3"> Host Any Event You Can Imagine</h3>
					<p className="text-sm font-proximanova3 mb-10">
						At blankspace, we welcome all types of events, from business meetings to birthday
						celebrations, workshops to cocktail receptions, conferences to weddings. Our versatile
						and adaptive venue transforms to suit any occasion, creating the perfect backdrop for
						your vision. With a team of dedicated professionals ready to assist, we ensure every
						detail is tailored to make your event truly memorable.
					</p>

					<div className="flex flex-wrap gap-x-9 text-lg w-10/12">
						{services.map((srv) => (
							<span
								key={srv.id}
								className={`flex items-center py-2 cursor-pointer rounded-md transition-all duration-300 font-proximanova4 
                                    ${activeService.id === srv.id ? "text-black" : "text-[#787878]"}`}
								onMouseEnter={() => {
									setActiveService(srv)
									setAutoPlayEnabled(false)
								}}
								onMouseLeave={() => setAutoPlayEnabled(true)}
							>
								{srv.service}
								<FaArrowRightLong
									className={`ml-2 transition-opacity duration-300 ${activeService.id === srv.id ? "opacity-100" : "opacity-0"}`}
								/>
							</span>
						))}
					</div>
				</div>
				<div className="w-1/2 relative">
					<Carousel>
						<CarouselContent>
							{services.map((s) => (
								<CarouselItem key={s.id} className={activeService.id === s.id ? "block" : "hidden"}>
									<Image src={s.image} alt={s.service} className="w-full h-auto" />
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>

					<p className="absolute -right-3 top- top-0 mt-1 py-10 translate-x-1/2 flex flex-col items-center justify-between h-full">
						<span className="text-sm font-proximanova4 rotate-90">Event - BarSpace</span>
						<span className="text-[7px] font-proximanova3 rotate-90">BLANKSPACE SCHUMAN</span>
					</p>
				</div>
			</div>

			{/* Spaces */}
			<div className="bg-[#1C1C1C] flex flex-col text-white mt-24">
				<h2 className="text-[3.5rem] pt-14 pb-5 font-proximanova5 text-center">
					Host any event anywhere
				</h2>
				<div className="flex items-center justify-center px-16">
					<div className="w-1/2 relative">
						<Carousel>
							<CarouselContent>
								{spaces.map((s) => (
									<CarouselItem key={s.id} className={activeSpace.id === s.id ? "block" : "hidden"}>
										<Image
											src={s.image}
											alt={s.name}
											width={10000}
											height={0}
											className="mb-12 p-3"
										/>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
						<p className="absolute -left-14  bottom-0  py-[4.8rem] mb-8 flex flex-col items-center justify-between h-full ">
							<span className="text-[7px] font-proximanova3 -rotate-90">BLANKSPACE SCHUMAN</span>
							<span className="text-sm font-proximanova4 -rotate-90">Event - BarSpace</span>
						</p>
					</div>
					<div className="w-1/2 flex flex-col justify-center gap-y-20 items-center pl-3">
						{spaces.map((sp) => (
							<div key={sp.id} onMouseEnter={() => setActiveSpace(sp)}>
								<h3 className="font-proximanova3 text-[2rem] hover:text-[#D2B48C] ">
									<Link href={sp.link}>{sp.name}</Link>
								</h3>
								<Separator className="my-3" />
								<p className="text-sm font-proximanova3 hover:text-white">{sp.desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurConcept
