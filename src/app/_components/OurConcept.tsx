"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

import { motion } from "framer-motion"
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

import { useTranslations } from "next-intl"

const OurConcept = () => {
	const t = useTranslations("home")
	const services = [
		{ id: 1, service: t("CorporateMeetings"), image: You1 },
		{ id: 2, service: t("CoctailReceptions"), image: You2 },
		{ id: 3, service: t("Teambuildings"), image: You3 },
		{ id: 4, service: t("Workshops"), image: You4 },
		{ id: 5, service: t("Conference"), image: You5 },
		{ id: 6, service: t("ProductLaunches"), image: You6 },
		{ id: 7, service: t("BirthdayWeddings"), image: You7 },
	]
	const spaces = [
		{
			id: 1,
			name: "Blankspace Schuman",
			image: Spaces1,
			link: "/spaces/blankspace-schuman",
			desc: t("BlankspaceSchumanDesc"),
		},
		{
			id: 2,
			name: "Blankspace Place du Luxembourg",
			image: Spaces2,
			link: "/spaces/blankspace-luxembourg",
			desc: t("BlankspaceLuxembourgDesc"),
		},
	]
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
			<div className="flex gap-5 items-center my-36 px-16">
				<motion.video
					initial={{ x: -300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					src="/BSP.mp4"
					autoPlay
					muted
					loop
					playsInline
					className="w-1/2"
				/>
				<motion.div
					initial={{ x: 300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center w-1/2 "
				>
					<h3 className="font-proximanova3 text-[2rem] mb-3 ">{t("OurConceptTitle")}</h3>
					<p className="text-sm font-proximanova3 ">{t("OurConceptText")}</p>
				</motion.div>
			</div>

			{/* Services */}
			<div className="flex gap-5 items-center px-16">
				<motion.div
					className="w-1/2"
					initial={{ x: -600, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h3 className="font-proximanova3 text-[2rem] mb-3"> {t("HostAnEventTitle")}</h3>
					<p className="text-sm font-proximanova3 mb-10">{t("HostAnEventText")}</p>

					<div className="flex flex-wrap gap-x-9 text-lg w-11/12">
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
				</motion.div>
				<motion.div
					className="w-1/2 relative"
					initial={{ x: 300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<Carousel>
						<CarouselContent>
							{services.map((s) => (
								<CarouselItem key={s.id} className={activeService.id === s.id ? "block" : "hidden"}>
									<Image src={s.image} alt={s.service} className="w-full h-auto" />
								</CarouselItem>
							))}
						</CarouselContent>
						<span className="text-sm absolute top-16 -right-[5.3rem]  font-proximanova4 rotate-90">
							{t("Event-Barspace")}
						</span>
						<span className="text-[7px] absolute bottom-9 -right-14  font-proximanova3 rotate-90">
							BLANKSPACE SCHUMAN
						</span>
					</Carousel>
				</motion.div>
			</div>

			{/* Spaces */}
			<div className="bg-[#1C1C1C] flex flex-col text-white mt-24">
				<motion.h2
					initial={{ y: 200 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-[3.5rem] pt-14 pb-5 font-proximanova5 text-center"
				>
					{t("HostAnyEventAnywhere")}
				</motion.h2>
				<div className="flex items-center justify-center px-16">
					<motion.div
						initial={{ x: -300 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="w-1/2 relative"
					>
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
							<span className="text-[7px] absolute top-12 -left-10  font-proximanova3 -rotate-90">
								BLANKSPACE SCHUMAN
							</span>
							<span className="text-sm absolute bottom-[7.5rem] -left-[4.8rem]  font-proximanova4 -rotate-90">
								{t("Event-Barspace")}
							</span>
						</Carousel>
					</motion.div>
					<motion.div
						initial={{ x: 300, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="w-1/2 flex flex-col justify-center gap-y-20 items-center pl-3"
					>
						{spaces.map((sp) => (
							<div key={sp.id} onMouseEnter={() => setActiveSpace(sp)}>
								<h3 className="font-proximanova3 text-[2rem] hover:text-[#D2B48C] ">
									<Link href={sp.link}>{sp.name}</Link>
								</h3>
								<Separator className="my-3" />
								<p className="text-sm font-proximanova3 hover:text-white">{sp.desc}</p>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default OurConcept
