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
import React from "react"
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

const countryList = ["United States", "United Kingdom", "Belgium", "Germany", "India", "Japan"]

const ContactForm = () => {
	const { register, handleSubmit } = useForm<FormData>()

	const onSubmit = (data: FormData) => {
		console.log(data)
	}

	return (
		<div className="flex justify-between px-32 py-14 w-full">
			<div>
				<h3 className="font-proximanova3 text-[2rem] mb-3">SEND US YOUR REQUEST!</h3>
				<ul className="flex flex-col space-y-4 pt-4 font-proximanova3">
					<li>
						<span className="font-proximanova4">Phone:</span> +32 471 92 22 77
					</li>
					<li>
						<span className="font-proximanova4">Email:</span> events@blankspace.brussels
					</li>
				</ul>
			</div>

			<div>
				<form className="p-4" onSubmit={handleSubmit(onSubmit)}>
					<h2 className="mb-1 text-lg font-semibold">Your contact details</h2>
					<div className="grid grid-cols-2 gap-4">
						<FormInput
							id="firstName"
							label="*First name"
							placeholder="First name"
							validation={{ required: "First name is required" }}
							register={register}
						/>
						<FormInput
							id="lastName"
							label="*Last name"
							placeholder="Last name"
							validation={{ required: "Last name is required" }}
							register={register}
						/>
						<FormSelect
							id="countryPrefix"
							label="*Country "
							options={countries.map((country) => ({
								value: country.code,
								label: `${country.name} (${country.code})`,
							}))}
							validation={{ required: "Country prefix is required" }}
							register={register}
						/>
						<FormInput
							id="number"
							label="*Number"
							placeholder="+32"
							validation={{ required: "Phone number is required" }}
							register={register}
						/>
						<FormInput
							id="email"
							label="*Email"
							type="email"
							placeholder="Enter email"
							validation={{ required: "Email is required" }}
							register={register}
						/>

						<FormInput
							id="subject"
							label="*Subject"
							placeholder="Enter subject"
							validation={{ required: "Subject is required" }}
							register={register}
						/>
					</div>
					<div className="flex flex-col mt-4">
						<label htmlFor="message" className="text-sm font-medium">
							Your message
						</label>
						<FormTextarea id="message" placeholder="Type your message here..." register={register} />
					</div>
					<div>
						<div className="flex justify-center relative text-center py-3">
							<Button size="sm" className="rounded-none" type="submit">
								Contact Us
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
		<div className="flex flex-col">
			<label htmlFor={id} className="text-sm font-medium">
				{label}
			</label>
			<Input
				id={id}
				type={type}
				{...register(id, validation)}
				placeholder={placeholder}
				className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
			/>
		</div>
	)
}

const FormTextarea = ({
	id,
	placeholder,
	register
}: any) => {

	return (
		<Textarea
			id={id}
			{...register(id)}
			placeholder={placeholder}
			className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
		/>
	)
}

const FormSelect = ({
	id,
	label,
	options,
	validation,
	register
}: any) => {

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
