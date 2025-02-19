"use client"

import ContactForm from "@/components/common/SendRequest"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { motion, useInView } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React, { useRef } from "react"
import Component1 from "../../../../../public/spaces/carousel/Component10.png"
import Component2 from "../../../../../public/spaces/carousel/Component11.png"
import Component3 from "../../../../../public/spaces/carousel/Component12.png"
import IMG from "../../../../../public/spaces/hero.svg"
import Icons from "../../../../../public/spaces/icons.svg"

const CarouselItems = [
	{ image: Component1, title: "Component1" },
	{ image: Component2, title: "Component2" },
	{ image: Component3, title: "Component3" },
]

const BlankspaceSchuman = () => {
	const t = useTranslations("spaces")
	const contactFormRef = useRef<HTMLDivElement>(null)

	const ref1 = useRef(null)
	const ref2 = useRef(null)
	const ref3 = useRef(null)
	const ref4 = useRef(null)
	const ref5 = useRef(null)
	const ref6 = useRef(null)
	const ref7 = useRef(null)
	const ref8 = useRef(null)
	const ref9 = useRef(null)
	const ref10 = useRef(null)
	const ref11 = useRef(null)

	const inView1 = useInView(ref1)
	const inView2 = useInView(ref2)
	const inView3 = useInView(ref3)
	const inView4 = useInView(ref4)
	const inView5 = useInView(ref5)
	const inView6 = useInView(ref6)
	const inView7 = useInView(ref7)
	const inView8 = useInView(ref8)
	const inView9 = useInView(ref9)
	const inView10 = useInView(ref10)
	const inView11 = useInView(ref11)

	const handleScrollToContact = () => {
		contactFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
	}

	return (
		<div className="  relative">
			<div className="md:min-h-[490px] relative text-white">
				<div className=" ">
					<Image src={IMG} alt="Blankspace Schuman" width={10000} height={10000} className="" />
				</div>
				<div className="min-h-[3px] bg-[#1C1C1C]">
					<div className="b-8 flex">
						<motion.h2
							ref={ref1}
							initial={{ y: 250, opacity: 0 }}
							animate={inView1 ? { y: 0, opacity: 1 } : { y: 250, opacity: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: false }}
							className="absolute	 font-proximanova5 mb-4 top-[8%] left-16 text-[3.5rem]  flex flex-col"
						>
							<span>Blankspace</span>
							<span className="absolute left-[60%] top-[90%]">Schuman</span>
						</motion.h2>
						<motion.div
							ref={ref2}
							initial={{ y: 250, opacity: 0 }}
							animate={inView2 ? { y: 0, opacity: 1 } : { y: 250, opacity: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: false }}
							className="absolute right-0 tracking-wide top-72  w-1/2  bottom-[11%] font-proximanova3 pl-2"
						>
							<h4 className=" text-[1.9rem]  mb-4">{t("adaptableSpaces")}</h4>
							<p className="text-sm w-[92%] leading-5">{t("adaptableSpacesText")}</p>
							<Button
								onClick={handleScrollToContact}
								size={"sm"}
								className=" font-proximanova4 mt-6  bg-transparent hover:bg-transparent border border-white rounded-none "
							>
								{t("eventButton")}
							</Button>
						</motion.div>
					</div>
				</div>
			</div>
			<div className="bg-[#1C1C1C] text-white">
				<motion.div
					ref={ref3}
					initial={{ y: 250, opacity: 0 }}
					animate={inView3 ? { y: 0, opacity: 1 } : { y: 250, opacity: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: false }}
					className="tracking-wide  w-1/2 font-proximanova3 py-16 pl-16"
				>
					<h4 className=" text-[1.9rem] pr-5  mb-4">{t("exclusivityPersonalizedExperience")}</h4>
					<p className="text-sm  leading-5">{t("exclusivityPersonalizedExperienceText")}</p>
				</motion.div>
			</div>

			<div className="flex flex-col">
				<div className="flex pl-8 pr-14 mx-auto py-24 justify-center items-center select-none w-full">
					<motion.div
						ref={ref4}
						initial={{ x: -300, opacity: 0 }}
						animate={inView4 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="ml-7 h-full flex flex-col justify-center w-[60%] bg-primary text-center px-[4rem] py-7 z-30 mr-[-40]"
					>
						<h3 className="font-proximanova3 text-[2rem] mb-3">{t("barSpace")}</h3>
						<p className="text-sm font-proximanova3">{t("barSpaceText1")}</p>
						<p className="text-sm font-proximanova3">{t("barSpaceText2")}</p>
						<p className="text-sm font-proximanova3">{t("barSpaceText3")}</p>
					</motion.div>
					<motion.div
						ref={ref5}
						initial={{ x: 300, opacity: 0 }}
						animate={inView5 ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="w-1/2 flex flex-col items-center relative"
					>
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
					</motion.div>
				</div>

				<div className="flex px-16 mx-auto py-16 justify-center items-center select-none">
					<motion.div
						ref={ref6}
						initial={{ x: -300, opacity: 0 }}
						animate={inView6 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="w-1/2 flex flex-col items-center relative"
					>
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
					</motion.div>
					<motion.div
						ref={ref7}
						initial={{ x: 300, opacity: 0 }}
						animate={inView7 ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="ml-7 h-full flex flex-col justify-center w-1/2 text-center pl-16 py-7 z-30 "
					>
						<h3 className="font-proximanova3 text-[2rem] mb-3">{t("gardenSpace")}</h3>
						<p className="text-sm font-proximanova3">{t("gardenSpaceText1")}</p>
						<p className="text-sm font-proximanova3">{t("gardenSpaceText2")}</p>
						<p className="text-sm font-proximanova3">{t("gardenSpaceText3")}</p>
					</motion.div>
				</div>

				<div className="flex pl-8 pr-14 mx-auto py-24 justify-center items-center select-none w-full">
					<motion.div
						ref={ref8}
						initial={{ x: -300, opacity: 0 }}
						animate={inView8 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="ml-7 h-full flex flex-col justify-center w-[60%] bg-primary text-center px-[4rem] py-7 z-30 mr-[-40]"
					>
						<h3 className="font-proximanova3 text-[2rem] mb-3">{t("tableSpace")}</h3>
						<p className="text-sm font-proximanova3">{t("tableSpaceText1")}</p>
						<p className="text-sm font-proximanova3">{t("tableSpaceText2")}</p>
						<p className="text-sm font-proximanova3">{t("tableSpaceText3")}</p>
					</motion.div>
					<motion.div
						ref={ref9}
						initial={{ x: 300, opacity: 0 }}
						animate={inView9 ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="w-1/2 flex flex-col items-center relative"
					>
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
					</motion.div>
				</div>

				<div className="flex px-16 mx-auto py-16 justify-center items-center select-none">
					<motion.div
						ref={ref10}
						initial={{ x: -300, opacity: 0 }}
						animate={inView10 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="w-1/2 flex flex-col items-center relative"
					>
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
					</motion.div>
					<motion.div
						ref={ref11}
						initial={{ x: 300, opacity: 0 }}
						animate={inView11 ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="ml-7 h-full flex flex-col justify-center w-1/2 text-center pl-16 py-7 z-30 "
					>
						<h3 className="font-proximanova3 text-[2rem] mb-3">{t("studioSpace")}</h3>
						<p className="text-sm font-proximanova3">{t("studioSpaceText1")}</p>
						<p className="text-sm font-proximanova3">{t("studioSpaceText2")}</p>
						<p className="text-sm font-proximanova3">{t("studioSpaceText3")}</p>
					</motion.div>
				</div>
			</div>
			<div ref={contactFormRef}>
				<ContactForm />
			</div>
		</div>
	)
}

export default BlankspaceSchuman
