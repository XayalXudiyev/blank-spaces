import GoogleMap from "@/components/GoogleMap"
import { useTranslations } from "next-intl"
import React from "react"

const ContactUs = () => {
	const t = useTranslations("contactUs")

	return (
		<div className="px-14 py-4 h-full ">
			<h3 className="font-proximanova3 text-[2rem] text-center mb-10 ">{t("ContactUs")}</h3>
			<div className="flex gap-x-7">
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
			</div>
		</div>
	)
}

export default ContactUs
