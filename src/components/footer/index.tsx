import Image from "next/image"
import Link from "next/link"
import React from "react"
import { CiLinkedin } from "react-icons/ci"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
	return (
		<footer className="w-full bg-[#1C1C1C] text-white py-6 font-proximanova3">
			<div className=" flex  px-16 w-full text-sm justify-between">
				<div>
					<Link href="/">
						<Image src="/logo.svg" alt="Logo" height={0} width={0} className="w-36 py-3" />
					</Link>
					<p className="mt-2 text-sm">Rue Saint-Quentin 29, B-1000 Brussels</p>
					<p className="mt-2 text-xs">Cookie Preferences</p>
				</div>

				<div>
					<h3>Contact us</h3>
					<p className="pb-1 pt-3">+32 471 92 22 77</p>
					<p>events@blankspace.brussels</p>
				</div>

				<div className="flex flex-col space-y-3">
					<h3>Blog</h3>
					<p>Spaces</p>
					<p>Catering & Workshops</p>
				</div>

				<div className="flex flex-col space-y-3">
					<h3>About Us</h3>
					<p>Contact Us</p>
				</div>
				<div className="flex flex-col space-y-3">
					<p>Terms & Conditions</p>
					<p>GDPR policy</p>
					<p>CSR policy</p>
				</div>
				<div className="flex space-x-4">
					<CiLinkedin size={20} className="text-2xl cursor-pointer" />
					<FaInstagram size={20} className="text-2xl cursor-pointer" />
				</div>
			</div>
		</footer>
	)
}

export default Footer
