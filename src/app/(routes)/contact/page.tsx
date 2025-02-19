"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useForm } from "react-hook-form"
import IMG from "../../../../public/Contact/contactpage.png"

export interface FormData {
	firstName: string
	lastName: string
	email: string
	number: string
	message: string
	countryPrefix: string
	subject: string
}

const countries = [
	{ code: "+1", name: "United States" },
	{ code: "+44", name: "United Kingdom" },
	{ code: "+32", name: "Belgium" },
	{ code: "+49", name: "Germany" },
	{ code: "+91", name: "India" },
	{ code: "+81", name: "Japan" },
]

const ContactPage = () => {
	const { register, handleSubmit } = useForm<FormData>()
	const t = useTranslations("contactUs")

	const onSubmit = (data: FormData) => {
		console.log(data)
	}

	return (
		<div className="flex items-center  px-16 py-14 w-full gap-20 min-h-screen">
			<div className=" w-full flex justify-between items-start">
				<div className="w-1/2 flex items-start justify-start">
					<Image src={IMG} alt="Photo" width={0} height={0} className=" " />
				</div>
				<div className="w-[576px] h-full flex ">
					<form onSubmit={handleSubmit(onSubmit)} className=" w-full">
						<h2 className="text-[2rem] mb-10 font-proximanova3 text-center">
							{t("SendUsYourRequest")}
						</h2>

						<div className="grid grid-cols-2 gap-x-4 gap-y-8 w-[576px]">
							<div className="flex flex-col h-[66px] justify-between">
								<label className="text-sm font-medium">{t("FirstName")}</label>
								<Input
									{...register("firstName", { required: t("FirstNameRequired") })}
									placeholder={t("FirstName")}
									className="text-[#4A4A4A] bg-transparent w-[280px] border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
								/>
							</div>

							<div className="flex flex-col h-[66px] justify-between">
								<label className="text-sm font-medium">{t("LastName")}</label>
								<Input
									{...register("lastName", { required: t("LastNameRequired") })}
									placeholder={t("LastName")}
									className="text-[#4A4A4A] bg-transparent w-[280px] border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
								/>
							</div>

							<div className="flex flex-col h-[66px] justify-between">
								<label className="text-sm font-medium">{t("Country")}</label>
								<Select {...register("countryPrefix", { required: t("CountryPrefixIsRequired") })}>
									<SelectTrigger className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] max-w-[280px] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0">
										<SelectValue placeholder={"Select"} />
									</SelectTrigger>

									<SelectContent>
										{countries.map((country) => (
											<SelectItem key={country.code} value={country.code}>
												{country.name} ({country.code})
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							<div className="flex flex-col h-[66px] justify-between">
								<label className="text-sm font-medium">{t("Number")}</label>
								<Input
									{...register("number", { required: t("PhoneRequired") })}
									placeholder="+32"
									className="text-[#4A4A4A] bg-transparent w-[280px] border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
								/>
							</div>

							<div className="flex flex-col h-[66px] justify-between">
								<label className="text-sm font-medium">{t("Email")}</label>
								<Input
									type="email"
									{...register("email", { required: t("EmailRequired") })}
									placeholder={t("EnterEmail")}
									className="text-[#4A4A4A] bg-transparent w-[280px] border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
								/>
							</div>

							<div className="flex flex-col h-[66px] justify-between">
								<label className="text-sm font-medium">{t("Subject")}</label>
								<Input
									{...register("subject", { required: t("SubjectRequired") })}
									placeholder={t("EnterSubject")}
									className="text-[#4A4A4A] bg-transparent w-[280px] border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
								/>
							</div>
						</div>
						<div className=" flex items-center gap-1 my-1">
							<input className="  border-[2px] border-[#4A4A4A]" type="checkbox" />{" "}
							<span className=" text-[#7A7A7A]  text-xs font-normal">
								Sign up for news & updates
							</span>
						</div>
						<div className="flex flex-col mt-4  gap-[6px]">
							<label className="text-sm font-medium">{t("YourMessage")}</label>
							<Textarea
								{...register("message")}
								placeholder={t("TypeYourMessageHere")}
								className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] min-h-[128px] w-[576px] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
							/>
						</div>

						<div className="flex justify-center py-3">
							<Button
								size="sm"
								className="rounded-none bg-black hover:bg-black text-white px-5"
								type="submit"
							>
								{t("ContactUs")}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ContactPage
