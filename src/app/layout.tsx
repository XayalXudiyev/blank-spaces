import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import localFont from "next/font/local"

import "./globals.css"
import Footer from "@/components/footer"
import Navbar from "@/components/header/Navbar"

const proximanovaBlack = localFont({
	src: "../fonts/Proximanova-Black.otf",
	variable: "--font-proximanova-black",
	weight: "100 900",
})

const proximanovaExtrabold = localFont({
	src: "../fonts/Proximanova-Extrabold.otf",
	variable: "--font-proximanova-extrabold",
	weight: "100 900",
})

const proximanovaBold = localFont({
	src: "../fonts/Proximanova-Bold.otf",
	variable: "--font-proximanova-bold",
	weight: "100 900",
})
const proximanovaLight = localFont({
	src: "../fonts/Proximanova-Light.otf",
	variable: "--font-proximanova-light",
	weight: "100 900",
})

const proximanovaRegular = localFont({
	src: "../fonts/Proximanova-Regular.otf",
	variable: "--font-proximanova-regular",
	weight: "100 900",
})
const proximanovaSemibold = localFont({
	src: "../fonts/Proximanova-Semibold.otf",
	variable: "--font-proximanova-semibold",
	weight: "100 900",
})
const proximanovaThin = localFont({
	src: "../fonts/Proximanova-Thin.otf",
	variable: "--font-proximanova-thin",
	weight: "100 900",
})

export const metadata: Metadata = {
	title: "Blank Space",
	description: "Created by Xayal",
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getLocale()
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body
				className={`
        ${proximanovaRegular.variable} 
        ${proximanovaBlack.variable} 
        ${proximanovaBold.variable} 
        ${proximanovaExtrabold.variable} 
        ${proximanovaLight.variable} 
        ${proximanovaSemibold.variable} 
        ${proximanovaThin.variable} 
       
        antialiased`}
			>
				<NextIntlClientProvider messages={messages}>
					<Navbar />
					<main className="pt-[3.3rem]">{children}</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
