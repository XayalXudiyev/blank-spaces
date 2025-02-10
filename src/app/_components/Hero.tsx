import Image from "next/image"

const Hero = () => {
	return (
		<div className="pt-12">
			<Image priority src="/hero.png" width={1000} height={0} alt="hero" className="w-[100vw]" />

			<div className="flex justify-between items-start relative h-56 bg-[#1C1C1C] text-white">
				<p className="text-[55px] font-proximanova5 -top-10 left-16 absolute  leading-normal tracking-[0.005em]">
					Choose your space. <br />
					Create unforgettable moments.
				</p>
				<p className="absolute right-16 top-3 flex flex-col text-end  ">
					<span className="text-sm font-proximanova4">Event - BarSpace</span>
					<span className="text-[7px] font-proximanova3">BLANKSPACE SCHUMAN</span>
				</p>
			</div>
		</div>
	)
}

export default Hero
