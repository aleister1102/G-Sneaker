export default function Card() {
	return (
		<div>
			<div className='bg-slate-300 rounded-[28px] p-2 flex justify-center items-center h-[20rem]'>
				<img
					src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png'
					alt=''
					className='origin-bottom -rotate-[24deg] translate-x-8 scale-105'
					loading='lazy'
				/>
			</div>
			<div className='mt-5 text-black'>
				<h3 className='text-lg font-bold'>Nike Air Zoom Pegasus 36</h3>
				<p className='mt-4 text-gray'>
					The iconic Nike Air Zoom Pegasus 36 offers more cooling and
					mesh that targets breathability across high-heat areas. A
					slimmer heel collar and tongue reduce bulk, while exposed
					cables give you a snug fit at higher speeds.
				</p>
				<div className='flex items-center justify-between mt-4 font-bold'>
					<span className='text-md'>$108.97</span>
					<button
						type='button'
						className='uppercase text-sm rounded-[28px] bg-yellow px-3 py-2'
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	)
}
