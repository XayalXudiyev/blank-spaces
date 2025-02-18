"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LocaleSwitcher from "../localSwitcher/LocaleSwithcher"
import { Button } from "../ui/button"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card"

interface NavItem {
	name: string
	href?: string
	submenu?: NavItem[]
}

const Navbar = () => {
	const pathname = usePathname()
	const t = useTranslations("navbar")

	const navItems: NavItem[] = [
		{
			name: t("events"),
			submenu: [
				{ name: t("corporateMeetings"), href: "/events/corporate-meetings" },
				{ name: t("coctailReceptions"), href: "/events/coctail-receptions" },
				{ name: t("teambuilding"), href: "/events/teambuilding" },
				{ name: t("workshops"), href: "/events/workshops" },
				{ name: t("conference"), href: "/events/conference" },
				{ name: t("productLaunches"), href: "/events/product-launches" },
				{ name: t("birthdayAndWeddings"), href: "/events/birthday-and-weddings" },
			],
		},
		{
			name: t("spaces"),
			submenu: [
				{ name: t("blankspaceSchuman"), href: "/spaces/blankspace-schuman" },
				{ name: t("blankspacePlaceDuLuxembourg"), href: "/spaces/blankspace-luxembourg" },
			],
		},
		{ name: t("cateringAndWorkshops"), href: "/catering-and-workshops" },
	]

	return (
		<nav className="fixed w-full flex items-center justify-center font-proximanova4 text-white bg-[#1C1C1C] z-50 ">
			<div className="absolute left-0 pl-16">
				<nav className="flex space-x-10 items-center">
					{navItems.map((item) => {
						const isActive = item.href ? pathname === item.href : false
						return (
							<div key={item.name} className="relative">
								{item.submenu ? (
									<HoverCard
										closeDelay={Number(100)}
										openDelay={Number(0)}
									>
										<HoverCardTrigger asChild>
											<button
												className={`font-proximanova5 py-3 ${isActive ? "text-[#D2B48C]" : "hover:text-[#D2B48C]"
													}`}
											>
												{item.name}
											</button>
										</HoverCardTrigger>
										<HoverCardContent
											align="start"
											side="bottom"
											sideOffset={Number(3)}
											className="bg-[#FBF8F4] w-44 p-2 rounded-none shadow-lg"
										>
											<ul className="space-y-2">
												{item.submenu.map((subItem) => (
													<li key={subItem.name}>
														<Link
															href={subItem.href as string}
															className={`block py-1 px-2 text-sm font-proximanova3 ${pathname === subItem.href
																? "text-[#D2B48C]"
																: "hover:bg-[#ECE0CF] rounded"
																}`}
														>
															{subItem.name}
														</Link>
													</li>
												))}
											</ul>
										</HoverCardContent>
									</HoverCard>
								) : (
									<Link
										href={item.href as string}
										className={`font-proximanova5 py-3 ${isActive ? "text-[#D2B48C]" : "hover:text-[#D2B48C]"
											}`}
									>
										{item.name}
									</Link>
								)}
							</div>
						)
					})}
				</nav>
			</div>

			<div>
				<Link href="/">
					<Image src="/logo.svg" alt="Logo" height={0} width={0} className="w-36 py-[14px]" />
				</Link>
			</div>

			<div className="absolute right-0 pr-16 flex h-full items-center">
				<LocaleSwitcher />
				<Button
					size={"sm"}
					className={`first:bg-transparent hover:bg-transparent border rounded-none  ml-4 ${pathname === "/contact" ?  "text-white bg-transparent border-white hover:text-[#D2B48C] hover:border-[#D2B48C]" :  "text-[#D2B48C] hover:text-white hover:border-white border-[#D2B48C] bg-transparent  "}`}
				>
					<Link href="/contact" className={"text-sm px-1 "}>
						Contact us
					</Link>
				</Button>
			</div>
		</nav>
	)
}

export default Navbar
