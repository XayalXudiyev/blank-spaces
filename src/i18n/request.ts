import { loadMessages } from "@/utils/loadMessages"
import { cookies } from "next/headers"
export default async function getRequestConfig() {
	const cookieStore = await cookies() // await əlavə edirik
	const locale = cookieStore.get("blank-spaces-locale")?.value || "en"
	const messages = await loadMessages(locale)
	return {
		locale,
		messages,
	}
}
