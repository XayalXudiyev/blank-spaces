"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

const Hero = () => {
	const t = useTranslations("home")

	return (
		<div>
			<video src="/BSP.mp4" autoPlay muted loop playsInline className="w-full h-[90vh]" />

			<div className="flex justify-between items-start relative h-56 bg-[#1C1C1C] text-white">
				<motion.p
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
					className="text-[55px] font-proximanova5 -top-10 left-16 absolute  leading-normal tracking-[0.005em]"
				>
					{t("ChooseYourSpace")} <br />
					{t("CreateUnforgettableMoments")}.
				</motion.p>
				<p className="absolute right-16 top-3 flex flex-col text-end  ">
					<span className="text-sm font-proximanova4">{t("Event-Barspace")}</span>
					<span className="text-[7px] font-proximanova3">BLANKSPACE SCHUMAN</span>
				</p>
			</div>
		</div>
	)
}

export default Hero
