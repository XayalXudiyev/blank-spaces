"use client"

import Companies from "@/components/common/Companies"
import FAQ from "@/components/common/FAQ"
import ContactForm from "@/components/common/SendRequest"
import Testimonials from "@/components/common/Testimonials"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { motion, useInView } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useRef } from "react"

const corporateMeetingImages = [
	"/Events/Corporate Meetings/MIV_7400.jpg",
	"/Events/Corporate Meetings/MIV_7413.jpg",
	"/Events/Corporate Meetings/MIV_7428.jpg",
	"/Events/Corporate Meetings/MIV_7430.jpg",
	"/Events/Corporate Meetings/MIV_7542.jpg",
	"/Events/Corporate Meetings/MIV_7544.jpg",
	"/Events/Corporate Meetings/MIV_7416.jpg",
	"/Events/Corporate Meetings/MIV_7417.jpg",
	"/Events/Corporate Meetings/MIV_7418.jpg",
]

const CorporateMeetings = () => {
	const t = useTranslations("events")
	const ref1 = useRef(null)
	const ref2 = useRef(null)
	const contactFormRef = useRef<HTMLDivElement>(null)

	const inView1 = useInView(ref1)
	const inView2 = useInView(ref2)

	const handleScrollToContact = () => {
		contactFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
	}

	return (
		<div>
			<div className="container m-auto mt-10 mb-16">
				<div className="w-full flex justify-end relative">
					<motion.div
						ref={ref1}
						initial={{ x: -300, opacity: 0 }}
						animate={inView1 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: false }}
						className="bg-primary absolute left-0 top-14 w-[570px] h-[600px] z-40 py-24 px-14 space-y-5"
					>
						<h2 className="text-3xl font-proximanova3">{t("corporateMeeeting")}</h2>
						<ul className="font-proximanova3 text-[14px] space-y-5">
							<li>{t("cm-text1")}</li>
							<li>{t("cm-text2")}</li>
							<li>{t("cm-text3")}</li>
						</ul>
						<Button
							onClick={handleScrollToContact}
							className="bg-black rounded-none text-white hover:bg-black flex mx-auto h-8 font-proximanova4 p-4"
						>
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
						{/* Carousel */}
						<Carousel
							className="basis-[55.5%] w-[650px]  bg-slate-500"
							plugins={[
								Autoplay({
									delay: 3000,
								}),
							]}
							opts={{
								align: "start",
								loop: true,
							}}
						>
							<CarouselContent>
								{corporateMeetingImages.map((src, index) => (
									<CarouselItem key={index} className="relative w-full h-[600px]">
										<Image
											src={src}
											alt={`Corporate Meeting ${index + 1}`}
											layout="fill"
											objectFit="cover"
										/>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</motion.div>
				</div>
			</div>

			<Companies />
			<Testimonials />
			<FAQ />

			<div ref={contactFormRef}>
				<ContactForm />
			</div>
		</div>
	)
}

export default CorporateMeetings
