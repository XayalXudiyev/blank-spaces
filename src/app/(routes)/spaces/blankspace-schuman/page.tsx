"use client"

import ContactForm from "@/components/common/SendRequest"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"
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

	return (
		<div className="  relative">
			<div className="md:min-h-[490px] relative text-white">
				<div className=" ">
					<Image src={IMG} alt="Blankspace Schuman" width={10000} height={10000} className="" />
				</div>
				<div className="min-h-[3px] bg-[#1C1C1C]">
					<div className="b-8 flex">
						<motion.h2
							initial={{ y: 250, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="absolute	 font-proximanova5 mb-4 top-[8%] left-16 text-[3.5rem]  flex flex-col"
						>
							<span>Blankspace</span>
							<span className="absolute left-[60%] top-[90%]">Schuman</span>
						</motion.h2>
						<motion.div
							initial={{ y: 250, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="absolute right-0 tracking-wide top-72  w-1/2  bottom-[11%] font-proximanova3 pl-2"
						>
							<h4 className=" text-[1.9rem]  mb-4">{t("adaptableSpaces")}</h4>
							<p className="text-sm w-[92%] leading-5">{t("adaptableSpacesText")}</p>
							<Button
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
					initial={{ y: 250, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="tracking-wide  w-1/2 font-proximanova3 py-16 pl-16"
				>
					<h4 className=" text-[1.9rem] pr-5  mb-4">{t("exclusivityPersonalizedExperience")}</h4>
					<p className="text-sm  leading-5">{t("exclusivityPersonalizedExperienceText")}</p>
				</motion.div>
			</div>

			<div className="flex flex-col">
				<div className="flex pl-8 pr-14 mx-auto py-24 justify-center items-center select-none w-full">
					<motion.div
						initial={{ x: -300, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="ml-7 h-full flex flex-col justify-center w-[60%] bg-primary text-center px-[4rem] py-7 z-30 mr-[-40]"
					>
						<h3 className="font-proximanova3 text-[2rem] mb-3">{t("barSpace")}</h3>
						<p className="text-sm font-proximanova3">{t("barSpaceText1")}</p>
						<p className="text-sm font-proximanova3">{t("barSpaceText2")}</p>
						<p className="text-sm font-proximanova3">{t("barSpaceText3")}</p>
					</motion.div>
					<motion.div
						initial={{ x: 300, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
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
						initial={{ x: -300, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
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
						initial={{ x: 300, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
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
						initial={{ x: -300, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="ml-7 h-full flex flex-col justify-center w-[60%] bg-primary text-center px-[4rem] py-7 z-30 mr-[-40]"
					>
						<h3 className="font-proximanova3 text-[2rem] mb-3">{t("tableSpace")}</h3>
						<p className="text-sm font-proximanova3">{t("tableSpaceText1")}</p>
						<p className="text-sm font-proximanova3">{t("tableSpaceText2")}</p>
						<p className="text-sm font-proximanova3">{t("tableSpaceText3")}</p>
					</motion.div>
					<motion.div
						initial={{ x: 300, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
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
						initial={{ x: -300, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
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
						initial={{ x: 300, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="ml-7 h-full flex flex-col justify-center w-1/2 text-center pl-16 py-7 z-30 "
					>
						<h3 className="font-proximanova3 text-[2rem] mb-3">{t("studioSpace")}</h3>
						<p className="text-sm font-proximanova3">{t("studioSpaceText1")}</p>
						<p className="text-sm font-proximanova3">{t("studioSpaceText2")}</p>
						<p className="text-sm font-proximanova3">{t("studioSpaceText3")}</p>
					</motion.div>
				</div>
			</div>
			<ContactForm />
		</div>
	)
}

export default BlankspaceSchuman
