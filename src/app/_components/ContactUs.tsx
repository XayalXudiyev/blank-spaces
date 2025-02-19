"use client"
import GoogleMap from "@/components/GoogleMap"
import { motion, useInView } from "framer-motion"
import { useTranslations } from "next-intl"
import React, { useRef } from "react"

const ContactUs = () => {
	const t = useTranslations("contactUs")

	const ref8 = useRef(null)
	const ref9 = useRef(null)

	const inView8 = useInView(ref8)
	const inView9 = useInView(ref9)

	return (
		<div className="px-14 py-4 h-full ">
			<motion.h3
				ref={ref8}
				initial={{ y: 200 }}
				animate={inView8 ? { y: 0 } : { y: 200 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: false }}
				className="font-proximanova3 text-[2rem] text-center mb-10 "
			>
				{t("ContactUs")}
			</motion.h3>
			<motion.div
				ref={ref9}
				initial={{ y: 150 }}
				animate={inView9 ? { y: 0 } : { y: 150 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="flex gap-x-7"
			>
				<GoogleMap />
				<div className="w-1/2 font-proximanova3 text-sm  flex flex-col justify-center">
					<h5 className="text-2xl font-proximanova3 pb-2">{t("Location")}</h5>
					<p>{t("Description")}</p>
					<ul className="flex flex-col space-y-4 pt-4">
						<li>
							<span className="font-proximanova4">{t("Phone")}:</span> +32 471 92 22 77
						</li>
						<li>
							<span className="font-proximanova4">{t("Email")}:</span> events@blankspace.brussels
						</li>
						<li>
							<span className="font-proximanova4">Address: </span>
							{t("Address")}
						</li>
						<li>
							<span className="font-proximanova4">Parking: </span>
							{t("Parking")}
						</li>
						<li>
							<span className="font-proximanova4">{t("PublicTransportation")}: </span>
							{t("PublicTransportationText")}
						</li>
					</ul>
				</div>
			</motion.div>
		</div>
	)
}

export default ContactUs
