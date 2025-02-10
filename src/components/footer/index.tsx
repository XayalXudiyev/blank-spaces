import React from "react"
import { FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
	return (
		<footer className="w-full bg-[#1C1C1C] text-white py-6 font-proximanova3">
			<div className=" gap-8 grid grid-cols-1 md:grid-cols-6 text-sm pl-16 ">
				<div>
					<h2 className="text-2xl font-light">blankspace</h2>
					<p className="mt-2">Rue Saint-Quentin 29, B-1000 Brussels</p>
					<p className="mt-2 underline cursor-pointer">Cookie Preferences</p>
				</div>

				<div>
					<h3 className="font-semibold">Contact us</h3>
					<p className="mt-2">+32 471 92 22 77</p>
					<p className="mt-2">events@blankspace.brussels</p>
				</div>

				<div>
					<h3 className="font-semibold">Blog</h3>
					<p className="mt-2">Spaces</p>
					<p className="mt-2">Catering & Workshops</p>
				</div>

				<div>
					<h3 className="font-semibold">About Us</h3>
					<p className="mt-2">Contact Us</p>
				</div>
				<div>
					<p className="mt-2">Terms & Conditions</p>
					<p className="mt-2">GDPR policy</p>
					<p className="mt-2">CSR policy</p>
				</div>
				<div className="flex space-x-4">
					<FaLinkedin className="text-2xl cursor-pointer" />
					<FaInstagram className="text-2xl cursor-pointer" />
				</div>
			</div>
		</footer>
	)
}

export default Footer
