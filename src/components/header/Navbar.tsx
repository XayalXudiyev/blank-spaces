"use client"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItem {
	name: string
	href?: string
	submenu?: NavItem[]
}

const navItems: NavItem[] = [
	{
		name: "Events",
		submenu: [
			{ name: "Corporate meetings", href: "/events/corporate-meetings" },
			{ name: "Cocktail receptions", href: "/events/coctail-receptions" },
			{ name: "Teambuilding", href: "/events/teambuilding" },
			{ name: "Workshops", href: "/events/workshops" },
			{ name: "Conference", href: "/events/conference" },
			{ name: "Product launches", href: "/events/product-launches" },
			{ name: "Birthday & Weddings", href: "/events/birthday-and-weddings" },
		],
	},
	{
		name: "Spaces",
		submenu: [
			{ name: "Blankspace Schuman", href: "/spaces/blankspace-schuman" },
			{ name: "Blankspace Place du Luxembourg", href: "/spaces/blankspace-luxembourg" },
		],
	},
	{ name: "Catering & Workshops", href: "/catering-and-workshops" },
]

const Navbar = () => {
	const pathname = usePathname()

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
																					: "hover:bg-[#ECE0CF] focus:bg-[#E4D1B9]"
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

			<div className="absolute right-0 pr-16">
				<Link
					href="/contact"
					className={`text-sm ${pathname === "/contact" ? "text-[#D2B48C]" : "hover:text-[#D2B48C]"}`}
				>
					Contact
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
