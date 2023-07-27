import nike from '../assets/nike.png'
import Card from './Card'

export default function OurProduct() {
	return (
		<div className='w-1/6 h-[500px] font-rubik py-3 px-7 rounded-[28px] shadow-slate-300 shadow-md relative overflow-hidden bg-white'>
			{/* Background */}
			<div className='absolute rounded-[50%] h-56 w-56 bg-yellow -top-20 -left-32'></div>

			<div className='relative z-10'>
				{/* Header */}
				<div className='pb-3'>
					<img src={nike} alt='' className='w-10 mb-3' />
					<h2 className='text-lg font-extrabold text-black'>
						Our Products
					</h2>
				</div>

				{/* Body */}
				<div className='h-[400px] overflow-y-scroll disable-scrollbars flex flex-col gap-y-20'>
					{/* Card */}
					<Card></Card>
					<Card></Card>
				</div>
			</div>
		</div>
	)
}
