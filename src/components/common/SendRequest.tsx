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
import React, { use } from "react"
import { useForm } from "react-hook-form"

export interface FormData {
	firstName: string
	lastName: string
	email: string
	number: string
	message: string
	country: string
	subject: string
	countryPrefix: string
}

const countries = [
	{ code: "+1", name: "United States" },
	{ code: "+44", name: "United Kingdom" },
	{ code: "+32", name: "Belgium" },
	{ code: "+49", name: "Germany" },
	{ code: "+91", name: "India" },
	{ code: "+81", name: "Japan" },
]

const ContactForm = () => {
	const { register, handleSubmit } = useForm<FormData>()
	const t = useTranslations("contactUs")

	const onSubmit = (data: FormData) => {
		console.log(data)
	}

	return (
		<div className="flex justify-between px-32 py-14 w-full">
			<div>
				<h3 className="font-proximanova3 text-[2rem] mb-3">{t("SendUsYourRequest")}</h3>
				<ul className="flex flex-col space-y-4 pt-4 font-proximanova3">
					<li>
						<span className="font-proximanova4">{t("Phone")}:</span> +32 471 92 22 77
					</li>
					<li>
						<span className="font-proximanova4">{t("Email")}:</span> events@blankspace.brussels
					</li>
				</ul>
			</div>

			<div>
				<form className="p-4" onSubmit={handleSubmit(onSubmit)}>
					<h2 className="mb-1 text-lg font-semibold"> {t("YourContactDetails")}</h2>
					<div className="grid grid-cols-2 gap-4">
						<FormInput
							id="firstName"
							label={t("FirstName")}
							placeholder={t("FirstName")}
							validation={{ required: t("FirstNameRequired") }}
							register={register}
						/>
						<FormInput
							id="lastName"
							label={t("LastName")}
							placeholder={t("LastName")}
							validation={{ required: t("LastNameRequired") }}
							register={register}
						/>
						<FormSelect
							id="countryPrefix"
							label={t("Country")}
							options={countries.map((country) => ({
								value: country.code,
								label: `${country.name} (${country.code})`,
							}))}
							validation={{ required: t("CountryPrefixIsRequired") }}
							register={register}
						/>
						<FormInput
							id="number"
							label={t("Number")}
							placeholder="+32"
							validation={{ required: t("PhoneRequired") }}
							register={register}
						/>
						<FormInput
							id="email"
							label={t("Email")}
							type="email"
							placeholder={t("EnterEmail")}
							validation={{ required: t("EmailRequired") }}
							register={register}
						/>

						<FormInput
							id="subject"
							label={t("Subject")}
							placeholder={t("EnterSubject")}
							validation={{ required: t("SubjectRequired") }}
							register={register}
						/>
					</div>
					<div className="flex flex-col mt-4">
						<label htmlFor="message" className="text-sm font-medium">
							{t("YourMessage")}
						</label>
						<FormTextarea id="message" placeholder={t("TypeYourMessageHere")} register={register} />
					</div>
					<div>
						<div className="flex justify-center relative text-center py-3">
							<Button
								size="sm"
								className="rounded-none bg-black hover:bg-black text-white  p-0 px-5"
								type="submit"
							>
								{t("ContactUs")}
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactForm

const FormInput = ({ id, label, placeholder, validation, type = "text", register }: any) => {
	return (
		<div className="flex flex-col justify-between">
			<label htmlFor={id} className="text-sm font-medium">
				{label}
			</label>
			<Input
				id={id}
				type={type}
				{...register(id, validation)}
				placeholder={placeholder}
				className="text-[#4A4A4A] w-[280px] bg-transparent border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
			/>
		</div>
	)
}

const FormTextarea = ({ id, placeholder, register }: any) => {
	return (
		<Textarea
			id={id}
			{...register(id)}
			placeholder={placeholder}
			className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] min-h-[128px] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
		/>
	)
}

const FormSelect = ({ id, label, options, validation, register }: any) => {
	return (
		<div className="flex flex-col">
			<label htmlFor={id} className="text-sm font-medium">
				{label}
			</label>
			<div className="mt-1">
				<Select {...register(id, validation)}>
					<SelectTrigger className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0">
						<SelectValue placeholder={"Select"} />
					</SelectTrigger>
					<SelectContent>
						{options.map((option: any) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
