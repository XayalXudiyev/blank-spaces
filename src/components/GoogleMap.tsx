"use client"

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import React from "react"

const APİ_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string

const containerStyle = {
	width: "50vw",
	height: "50vh",
}

const center = {
	lat: 50.80177978571909,
	lng: 4.288190499725439,
}

function MapComponent() {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: APİ_KEY,
	})

	if (!isLoaded) return <div>Loading...</div>

	return (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
			<Marker position={center} />
		</GoogleMap>
	)
}

export default React.memo(MapComponent)
