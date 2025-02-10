"use client"

import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/constants/Companies"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { FaArrowDown, FaArrowLeftLong, FaArrowRightLong, FaArrowUp } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"
import { Button } from "../ui/button"

interface ExpandedState {
	[key: number]: boolean
}

function Testimonials() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ axis: "y", loop: true })
	const [carouselRef, carouselApi] = useEmblaCarousel({ axis: "y", loop: true })
	const [selectedIndex, setSelectedIndex] = useState(10)
	const [expanded, setExpanded] = useState<ExpandedState>({})

	const toggleExpand = (index: number) => {
		setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
	}

	const scrollTo = useCallback(
		(index: number) => {
			emblaApi?.scrollTo(index)
			carouselApi?.scrollTo(index)
		},
		[emblaApi, carouselApi],
	)

	const scrollNext = useCallback(() => {
		emblaApi?.scrollNext()
		carouselApi?.scrollNext()
	}, [emblaApi, carouselApi])

	const scrollPrev = useCallback(() => {
		emblaApi?.scrollPrev()
		carouselApi?.scrollPrev()
	}, [emblaApi, carouselApi])

	const onSelect = useCallback(() => {
		if (!emblaApi) return
		setSelectedIndex(emblaApi.selectedScrollSnap())
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) return
		emblaApi.on("select", onSelect)
	}, [emblaApi, onSelect])

	return (
		<div className="flex my-16  h-[500px] ">
			<div className="w-5/12 bg-white  pr-5 h-full flex justify-center">
				<div className="bg-[#ECE0CF] w-36" />

				<div className="ml-7 h-full flex flex-col items- justify-center">
					<h3 className="font-proximanova3 text-[2rem] mb-3">“What Our Clients Say</h3>
					<p className="text-sm font-proximanova3">
						The name says it all: blankspace <br />
						Like a blank piece of paper, a neutral space where you can determine the color and style
						yourself. <br />
						At first glance, the space appears empty. Apart from the bar counter placed in front of
						the window, which also serves as a welcome desk, and some white frames on the walls and
						original plant decoration on the ceiling.{" "}
					</p>
				</div>
			</div>

			<div className="w-7/12 pr-16 pl-20 bg-white relative">
				<div className="absolute top-[7rem] -ml-16  flex flex-col items-center justify-center">
					<Button onClick={scrollPrev} className="bg-transparent hover:bg-transparent text-black">
						<FaArrowUp size={20} />
					</Button>

					<div className="flex flex-col items-center space-y-1">
						<div className="overflow-hidden" ref={carouselRef}>
							<div className="flex flex-col h-[240px] ">
								{testimonials.map((tml, index) => (
									<Button
										key={index}
										onClick={() => scrollTo(index)}
										className={`rounded-full w-8 h-8 text-sm font-proximanova3 flex items-center justify-center text-black hover:bg-transparent font-medium ${
											index === selectedIndex
												? "bg-transparent font-proximanova5 text-base "
												: " bg-transparent "
										}`}
									>
										{tml.id}
									</Button>
								))}
							</div>
						</div>
					</div>

					<Button onClick={scrollNext} className="bg-transparent hover:bg-transparent text-black">
						<FaArrowDown size={20} />
					</Button>
				</div>
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex flex-col h-[500px]">
						{testimonials.map((tml, index) => (
							<div key={tml.id} className="mx-5 p-4">
								<Card
									className={`bg-[#ECE0CF] rounded-none h-[8.5rem] text-sm font-proximanova3 transition-all duration-1000 ${
										index % 2 === 0 ? "rotate-[2deg]" : "-rotate-[2deg]"
									} ${expanded[index] ? "h-[28rem]" : "h-[8.5rem]"}`}
								>
									<CardContent className="flex flex-col items-center justify-center h-full text-center py-4 z-50 w-full">
										<div
											className={`overflow-hidden transition-all duration-1000 ease-in-out mb-1 ${
												expanded[index] ? "h-full" : "h-[8.5rem]"
											}`}
										>
											<p>{tml.description}</p>
										</div>

										<div className="flex w-1/2 ml-auto justify-between">
											<Button
												className="p-0 h-fit bg-transparent hover:bg-transparent text-black text-xs font-proximanova4"
												onClick={() => toggleExpand(index)}
											>
												<span>{expanded[index] ? "Less" : "More"}</span>{" "}
												<IoIosArrowDown
													size={20}
													className={`${
														expanded[index] && "rotate-180 transition-all duration-1000"
													}`}
												/>
											</Button>
											<div>{tml.author}</div>
										</div>
										<span
											className={`absolute bg-white rounded-full w-[3.6rem] h-[3.6rem] p-1 flex shadow-[0_4px_10px_rgba(0,0,0,0.25)] ${
												index % 2 === 0 ? "-left-[6%]" : "-right-[6%]"
											}`}
										>
											<Image
												width={0}
												height={0}
												src={tml.icon}
												alt={tml.author}
												className="p-1 flex items-center justify-center"
											/>
										</span>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
