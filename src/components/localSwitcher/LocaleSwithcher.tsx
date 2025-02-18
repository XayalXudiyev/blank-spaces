"use client"

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import Cookies from "js-cookie"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState, useTransition } from "react"

export default function LocaleSwitcher() {
	const [isPending, startTransition] = useTransition()
	const router = useRouter()
	const pathname = usePathname()

	const [localeActive, setLocaleActive] = useState<string | null>(null)

	useEffect(() => {
		const storedLocale = Cookies.get("blank-spaces-locale") || "en"
		setLocaleActive(storedLocale)
	}, [])

	const onSelectChange = (nextLocale: string) => {
		Cookies.set("blank-spaces-locale", nextLocale)

		startTransition(() => {
			const newPathname = pathname.replace(`/${localeActive}`, `/${nextLocale}`)
			router.replace(newPathname)
			router.refresh()
		})

		setLocaleActive(nextLocale)
	}

	const localeLabels: Record<string, string> = {
		en: "EN",
		fr: "FR",
		nl: "NL",
	}

	if (localeActive === null) return null

	return (
		<Select onValueChange={onSelectChange} defaultValue={localeActive} disabled={isPending}>
			<SelectTrigger className="bg-transparent group border-none outline-none ring-0 focus:ring-offset-0 focus:ring-0 focus:outline-none gap-x-1 md:text-base w-fit [&>svg]:hover:text-[#D2B48C] [&>svg]:opacity-100 [&>svg]:data-[state=open]:rotate-180 ">
				<span className="text-base font-proximanova3 group-hover:text-[#D2B48C]">
					{localeLabels[localeActive]}
				</span>
			</SelectTrigger>
			<SelectContent className="mt-[3px] rounded-none shadow-none bg-[#FBF8F4]">
				<SelectGroup>
					<SelectItem value="en">
						<div className="flex gap-x-1">
							<img src="/flags/englishFlag.png" width={25} height={15} alt="" />
							<span>English</span>
						</div>
					</SelectItem>
					<SelectItem value="fr">
						<div className="flex gap-x-1">
							<img src="/flags/frenchFlag.png" width={25} height={15} alt="" />
							<span>French</span>
						</div>
					</SelectItem>
					<SelectItem value="nl">
						<div className="flex gap-x-1">
							<img src="/flags/dutchFlag.png" width={25} height={15} alt="" />
							<span>Dutch</span>
						</div>
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
