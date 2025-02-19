"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useTranslations } from "next-intl"
import { useEffect, useRef, useState } from "react"

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
			<video src="/BSP.mp4" autoPlay muted loop playsInline className="w-full h-[90vh]" />

			<div
				ref={ref}
				className="flex justify-between items-start relative h-56 bg-[#1C1C1C] text-white overflow-hidden"
			>
				<motion.p
					initial={{ y: 100, opacity: 0 }}
					animate={hasAnimated ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-5xl font-proximanova5 -top-9 left-8  absolute leading-normal tracking-[0.005em]"
				>
					{t("YourPerfectChoice")} <br />
					{t("WeAreBlanspace")}
				</motion.p>
			</div>
		</div>
	)
}

export default Hero
