"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const Hero = () => {
	const t = useTranslations("home")
	const ref = useRef(null)
	const isInView = useInView(ref, { amount: 0.2 }) // 20% ekrana girince tetiklensin

	const [hasAnimated, setHasAnimated] = useState(false)
	const lastScrollY = useRef(0) // Son scroll pozisyonunu takip eder

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			if (isInView && currentScrollY > lastScrollY.current) {
				// Aşağı iniyorsak animasyonu çalıştır
				setHasAnimated(true)
			}
			if (currentScrollY < lastScrollY.current) {
				// Yukarı çıkıyorsak animasyonu resetle
				setHasAnimated(false)
			}
			lastScrollY.current = currentScrollY
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [isInView])

	return (
		<div>
			{/* <div className={`absolute text-xs font-proximanova3 mt-1)] ${index % 2 === 0 ? "left-[6%]" : "right-[6%]"}`}>{tml.author}</div> */}

			<video src="/BSP.mp4" autoPlay muted loop playsInline className="w-full h-[90vh]" />

			<div ref={ref} className="flex justify-between items-start relative h-56 bg-[#1C1C1C] text-white overflow-hidden">
				<motion.p
					initial={{ y: 100, opacity: 0 }}
					animate={hasAnimated ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-[55px] font-proximanova5 -top-10 left-16 absolute leading-normal tracking-[0.005em]"
				>
					{t("ChooseYourSpace")} <br />
					{t("CreateUnforgettableMoments")}.
				</motion.p>

				<motion.p
					initial={{ y: 30, opacity: 0 }}
					animate={hasAnimated ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
					className="absolute right-16 top-3 flex flex-col text-end"
				>
					<span className="text-sm font-proximanova4">{t("Event-Barspace")}</span>
					<span className="text-[7px] font-proximanova3">BLANKSPACE SCHUMAN</span>
				</motion.p>
			</div>
		</div>
	)
}

export default Hero
