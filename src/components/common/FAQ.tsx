import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from "next-intl"

const FAQ = () => {
	const t = useTranslations("FAQ")

	const FAQData = [
		{
			id: "item-1",
			question: t("Question1"),

			answer: (
				<>
					<p>{t("Q1Answer1")}</p>
					<p>{t("Q1Answer2")}</p>
				</>
			),
		},
		{
			id: "item-2",
			question: t("Question2"),
			answer: <p>{t("Q2Answer1")}</p>,
		},
		{
			id: "item-3",
			question: t("Question3"),
			answer: (
				<>
					<p>{t("Q3Answer1")}</p>
					<p>{t("Q3Answer2")}</p>
				</>
			),
		},
		{
			id: "item-4",
			question: t("Question4"),
			answer: <p>{t("Q4Answer1")}</p>,
		},
		{
			id: "item-5",
			question: t("Question5"),
			answer: <p>{t("Q5Answer1")}</p>,
		},
		{
			id: "item-6",
			question: t("Question6"),
			answer: (
				<>
					<p>{t("Q6Answer1")}</p>
					<p>{t("Q6Answer2")}</p>
				</>
			),
		},
	]
	return (
		<div className="w-full py-10">
			<h2 className="text-[2rem] font-proximanova3 text-center py-4">
				{t("FrequentlyAskedQuestions")}
			</h2>
			<Accordion type="multiple" className=" flex flex-col w-[46%]  mx-auto">
				{FAQData.map((faq) => (
					<AccordionItem key={faq.id} value={faq.id} className="w-full text-">
						<AccordionTrigger className="font-proximanova4 text-[22px] py-4  leading-7 gap-3 text-[#4A4A4A] hover:no-underline text-start">
							{faq.question}
						</AccordionTrigger>
						<AccordionContent className="font-proximanova3 flex flex-col gap-y-5 pr-10 font-thin  leading-[18px]">
							{faq.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}

export default FAQ
