export async function loadMessages(locale: string) {
	try {
		const messages: Record<string, string> = {}
		const files = [
			"navbar",
			"home",
			"contactUs",
			"events",
			"spaces",
			"catering",
			"testimonials",
			"FAQ",
			"notFound",
		]
		for (const file of files) {
			const importedModule = await import(`../messages/${locale}/${file}.json`)
			messages[file] = importedModule.default
		}

		return messages
	} catch (error) {
		console.error(`Don't upload: ${locale}`, error)
		return {}
	}
}
