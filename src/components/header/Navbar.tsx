"use client"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LocaleSwitcher from "../localSwitcher/LocaleSwithcher"
import { Button } from "../ui/button"

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
				<NavigationMenu>
					<NavigationMenuList className="space-x-10">
						{navItems.map((item) => {
							const isActive = item.href ? pathname === item.href : false
							const isParentActive = item.submenu?.some((subItem) =>
								pathname.startsWith(subItem.href ?? ""),
							)

							return (
								<NavigationMenuItem key={item.name}>
									{item.submenu ? (
										<>
											<NavigationMenuTrigger
												className={`font-proximanova5  ${
													isParentActive ? "text-[#D2B48C]" : "data-[state=open]:text-[#D2B48C]"
												}`}
											>
												{item.name}
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<ul className="grid gap-3 p-3 w-44 text-sm border-none outline-none bg-[#FBF8F4]">
													{item.submenu.map((subItem) => {
														const isSubActive = pathname === subItem.href

														return (
															<li key={subItem.name}>
																{subItem.href && (
																	<NavigationMenuLink asChild>
																		<Link
																			href={subItem.href}
																			className={`block py-1 text-sm font-proximanova3 ${
																				isSubActive
																					? "text-[#D2B48C]"
																					: "hover:bg-[#ECE0CF] px-2 focus:bg-[#E4D1B9]"
																			}`}
																		>
																			{subItem.name}
																		</Link>
																	</NavigationMenuLink>
																)}
															</li>
														)
													})}
												</ul>
											</NavigationMenuContent>
										</>
									) : (
										item.href && (
											<NavigationMenuLink asChild>
												<Link
													href={item.href}
													className={`rounded-md text-sm ${
														isActive ? "text-[#D2B48C]" : "hover:text-[#D2B48C]"
													}`}
												>
													{item.name}
												</Link>
											</NavigationMenuLink>
										)
									)}
								</NavigationMenuItem>
							)
						})}
					</NavigationMenuList>
				</NavigationMenu>
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
					className={`first:bg-transparent hover:bg-transparent border rounded-none border-white ml-4 ${pathname === "/contact" ? "text-[#D2B48C] border-[#D2B48C] bg-transparent " : "hover:text-white bg-transparent"}`}
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
