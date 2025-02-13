import { useRouter } from "next/router"

const EventPage = () => {
    const router = useRouter()
    const { slug } = router.query

    type EventKeys = "corporate-meetings" | "coctail-receptions" | "teambuilding" | "workshops" | "conference" | "product-launches" | "birthday-and-weddings";

    const events: Record<EventKeys, string> = {
        "corporate-meetings": "Corporate Meetings Details",
        "coctail-receptions": "Cocktail Receptions Details",
        "teambuilding": "Teambuilding Details",
        "workshops": "Workshops Details",
        "conference": "Conference Details",
        "product-launches": "Product Launches Details",
        "birthday-and-weddings": "Birthday & Weddings Details"
    }

    const eventDetail = events[slug as EventKeys] || "Event not found"


    return (
        <div>
            <h1>{eventDetail}</h1>
            <p>Here you can provide more details about {slug}.</p>
        </div>
    )
}

export default EventPage
