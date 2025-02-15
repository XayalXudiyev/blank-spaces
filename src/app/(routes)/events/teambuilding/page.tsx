import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"

import Companies from "@/components/common/Companies"
import FAQ from "@/components/common/FAQ"
import Testimonials from "@/components/common/Testimonials"
import { Button } from "@/components/ui/button"
import img from "../../../../../public/events/corporate-meetings/1.png"
import { useTranslations } from "next-intl"
import ContactForm from "@/components/common/SendRequest"

const Teambuilding = () => {

	const t = useTranslations("events")

	return (
		<div>
			<div className=" container m-auto  mt-10 mb-16 ">
				<div className="w-full flex justify-end relative">
				<div className=" bg-primary absolute left-0 top-14 w-[570px] h-[600px] z-40  py-24 px-14 space-y-5">
				<h2 className="text-3xl font-proximanova3">{t("teambuilding")}</h2>
						<ul className="font-proximanova3 text-[14px] space-y-5">
							<li>
								{t("tb-text1")}
							</li>
							<li>
								{t("tb-text2")}
							</li>
							<li>
								{t("tb-text3")}
							</li>
						</ul>
						<Button className="bg-black rounded-none text-white hover:bg-black flex mx-auto h-8 font-proximanova4 p-4 ">
							{t("eventButton")}

						</Button>
					</div>

					<Carousel className="basis-[55.5%]   ">
						<CarouselContent>
							<CarouselItem>
								<Image src={img} height={0} width={0} alt="Img" className="" />
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
			</div>
			<Companies />
			<Testimonials />
			<FAQ />
			<ContactForm />

		</div>
	)
}

export default Teambuilding
