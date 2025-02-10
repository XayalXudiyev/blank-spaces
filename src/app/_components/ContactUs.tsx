import GoogleMap from "@/components/GoogleMap"
import React from "react"

const ContactUs = () => {
	return (
		<div className="px-14 py-4 h-full ">
			<h3 className="font-proximanova3 text-[2rem] text-center mb-10 ">Contact Us</h3>
			<div className="flex gap-x-7">
				<GoogleMap />
				<div className="w-1/2 font-proximanova3 text-sm  flex flex-col justify-center">
					<h5 className="text-2xl font-proximanova3 pb-2">LOCATION</h5>
					<p>
						The townhouse is in a quiet residential street, just behind the Berlaymont, the
						headquarters of the European Commission in the Brussels EU district where Europe meets
						daily.
					</p>
					<ul className="flex flex-col space-y-4 pt-4">
						<li>
							<span className="font-proximanova4">Phone:</span> +32 471 92 22 77
						</li>
						<li>
							<span className="font-proximanova4">Email:</span> events@blankspace.brussels
						</li>
						<li>
							<span className="font-proximanova4">Address:</span> Rue Saint Quentin 29, B-1000
							Brussels
						</li>
						<li>
							<span className="font-proximanova4">Parking:</span> On the street, in the
							neighborhood, Interparking Arts-Loi within walking distance
						</li>
						<li>
							<span className="font-proximanova4">Public transportation:</span> Metro (Line 1 & 5) &
							Intercity Trains at Bruxelles-Schuman station
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ContactUs
