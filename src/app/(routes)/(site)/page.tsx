import ContactUs from "@/app/_components/ContactUs"
import Hero from "@/app/_components/Hero"
import OurConcept from "@/app/_components/OurConcept"
import Companies from "@/components/common/Companies"
import ContactForm from "@/components/common/SendRequest"
import Testimonials from "@/components/common/Testimonials"

export default function Home() {
	return (
		<div>
			<Hero />
			<OurConcept />
			<Companies />
			<Testimonials />
			<ContactUs />
			<ContactForm />
		</div>
	)
}
