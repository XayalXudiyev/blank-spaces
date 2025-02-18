"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"

import Companies from "@/components/common/Companies"
import FAQ from "@/components/common/FAQ"
import ContactForm from "@/components/common/SendRequest"
import Testimonials from "@/components/common/Testimonials"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useTranslations } from "next-intl"
import img from "../../../../../public/events/corporate-meetings/1.png"
import { useRef } from "react"

const ProductLaunches = () => {
	const t = useTranslations("events")

	const ref1 = useRef(null)
	const ref2 = useRef(null)


	const inView1 = useInView(ref1)
	const inView2 = useInView(ref2)
	return (
		<div>
			<div className=" container m-auto  mt-10 mb-16 ">
				<div className="w-full flex justify-end relative">
					<motion.div
						ref={ref1}
						initial={{ x: -300, opacity: 0 }}
						animate={inView1 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className=" bg-primary absolute left-0 top-14 w-[570px] h-[600px] z-40  py-24 px-14 space-y-5"
					>
						{" "}
						<h2 className="text-3xl font-proximanova3">{t("productLaunches")}</h2>
						<ul className="font-proximanova3 text-[14px] space-y-5">
							<li>{t("pl-text1")}</li>
							<li>{t("pl-text2")}</li>

							<li>{t("pl-text3")}</li>
							<li>{t("pl-text4")}</li>
						</ul>
						<Button className="bg-black rounded-none text-white hover:bg-black flex mx-auto h-8 font-proximanova4 p-4 ">
							{t("eventButton")}
						</Button>
					</motion.div>
					<motion.div
						ref={ref2}
						initial={{ x: 300, opacity: 0 }}
						animate={inView2 ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
					>
						<Carousel className="basis-[55.5%] w-[650px]">
							<CarouselContent>
								<CarouselItem>
									<Image src={img} height={0} width={0} alt="Img" className="" />
								</CarouselItem>
							</CarouselContent>
						</Carousel>
					</motion.div>
				</div>
			</div>
			<Companies />
			<Testimonials />
			<FAQ />
			<ContactForm />
		</div>
	)
}

export default ProductLaunches
