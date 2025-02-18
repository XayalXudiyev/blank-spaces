"use client"

import ContactForm from "@/components/common/SendRequest"
import { Button } from "@/components/ui/button"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { motion, useInView } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React, { useRef, useState } from "react"
import IMG from "../../../../public/catering/Picture.png"

interface ExpandedState {
	[key: number]: boolean
}

const CateringAndWorkshops = () => {
	const [expanded, setExpanded] = useState<ExpandedState>({})
	const t = useTranslations("catering")

	const toggleExpand = (index: number) => {
		setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
	}

	const truncateText = (text: string, isExpanded: boolean) => {
		const words = text.split(" ")
		if (words.length > 20 && !isExpanded) {
			return `${words.slice(0, 20).join(" ")}...`
		}
		return text
	}

	const cateringTexts = [t("obaoText"), t("mazmizText"), t("itraturiText")]
	const ref1 = useRef(null)
	const ref2 = useRef(null)
	const ref3 = useRef(null)
	const ref4 = useRef(null)
	const ref5 = useRef(null)
	const ref6 = useRef(null)

	const inView1 = useInView(ref1)
	const inView2 = useInView(ref2)
	const inView3 = useInView(ref3)
	const inView4 = useInView(ref4)
	const inView5 = useInView(ref5)
	const inView6 = useInView(ref6)
	return (
		<div className="w-full ">
			<div className="flex py-16 pr-40 bg-primary">
				<div className="flex">
					<motion.div
						ref={ref1}
						initial={{ x: -500, opacity: 0 }}
						animate={inView1 ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="w-full flex flex-col justify-center space-y-2 bg-white px-16"
					>
						<p className="text-base font-proximanova4">{t("culinaryPerfection")}</p>
						<p className="text-3xl pb-4 font-proximanova3">{t("blankCatering")}</p>
						<div className="flex flex-col space-y-5 text-sm font-proximanova3">
							<p>{t("blankCateringText1")}</p>
							<p>{t("blankCateringText2")}</p>
							<p>{t("blankCateringText3")}</p>
						</div>
					</motion.div>
					<motion.div
						ref={ref2}
						initial={{ x: 500, opacity: 0 }}
						animate={inView2 ? { x: 0, opacity: 1 } : { x: 500, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="h-auto w-9/12"
					>
						<Image src={IMG} alt="Catering" width={10000} height={1000} />
					</motion.div>
				</div>
			</div>

			<motion.div
				ref={ref3}
				initial={{ y: 500, opacity: 0 }}
				animate={inView3 ? { y: 0, opacity: 1 } : { y: -500, opacity: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: false }}
				className="w-full flex flex-col justify-center items-center bg-white py-16"
			>
				<h2 className="text-4xl font-proximanova3 text-center">{t("ourTrustedCaterers")}</h2>

				<div className="w-[100vw] flex justify-center items-center mt-10 px-16 mx-auto select-none">
					<Carousel className="w-full ">
						<CarouselContent>
							{cateringTexts.map((text, index) => (
								<CarouselItem key={index} className="basis-1/3">
									<div className="p-1">
										<Image src={IMG} alt="Catering" width={10000} height={1000} />
									</div>
									<p className="font-proximanova3 text-sm text-center px-2">
										{truncateText(text, expanded[index])}
										<Button
											onClick={() => toggleExpand(index)}
											className="p-0  h-0 pl-1 font-proximanova4 text-xs bg-transparent hover:bg-transparent underline"
										>
											{expanded[index] ? t("showLess") : t("showMore")}
										</Button>
									</p>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</motion.div>
			<div className="flex py-16 pl-40 bg-primary">
				<div className="flex">
					<motion.div
						ref={ref4}
						initial={{ x: -500, opacity: 0 }}
						animate={inView4 ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="h-auto w-9/12"
					>
						<Image src={IMG} alt="Catering" width={10000} height={1000} />
					</motion.div>
					<motion.div
						ref={ref5}
						initial={{ x: 500, opacity: 0 }}
						animate={inView5 ? { x: 0, opacity: 1 } : { x: 500, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="w-full flex flex-col justify-center space-y-2 bg-white px-16"
					>
						<p className="text-lg font-proximanova4">{t("dinamicExperiences")}</p>
						<p className="text-[33px] pb-4 font-proximanova3">{t("ourWorkshops")}</p>
						<div className="flex flex-col space-y-5 text-sm font-proximanova3">
							<p>{t("ourWorkshopsText1")}</p>
							<p>{t("ourWorkshopsText2")}</p>
							<p>{t("ourWorkshopsText3")}</p>
							<p>{t("ourWorkshopsText4")}</p>
						</div>
					</motion.div>
				</div>
			</div>
			<motion.div
				ref={ref6}
				initial={{ y: 300, opacity: 0 }}
				animate={inView6 ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: false }}
				className="w-full flex flex-col justify-center items-center bg-white py-16"
			>
				<h2 className="text-4xl font-proximanova3 text-center">
					{t("DiscoverOurWorkshopStories")}
				</h2>

				<div className="w-[100vw] flex justify-center items-center mt-10 px-16 mx-auto select-none">
					<Carousel className="w-full ">
						<CarouselContent>
							{cateringTexts.map((text, index) => (
								<CarouselItem key={index} className="basis-1/3">
									<div className="p-1">
										<Image src={IMG} alt="Catering" width={10000} height={1000} />
									</div>
									<p className="font-proximanova3 text-sm text-center px-2">
										{truncateText(text, expanded[index])}
										<Button
											onClick={() => toggleExpand(index)}
											className="p-0  h-0 pl-1 font-proximanova4 text-xs bg-transparent hover:bg-transparent underline"
										>
											{expanded[index] ? t("showLess") : t("showMore")}
										</Button>
									</p>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</motion.div>
			<ContactForm />
		</div>
	)
}

export default CateringAndWorkshops
