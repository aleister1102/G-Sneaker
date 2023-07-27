import nike from '../assets/nike.png'

export default function Card({ title, data, Component, gap, totalPrice }) {
	return (
		<div className='w-1/6 h-[500px] font-rubik py-3 px-7 rounded-[28px] shadow-slate-300 shadow-md relative overflow-hidden bg-white'>
			<div className='absolute rounded-[50%] h-56 w-56 bg-yellow -top-20 -left-32'></div>
			<div className='relative z-10'>
				<div className='pb-3'>
					<img src={nike} alt='' className='w-10 mb-3' />
					<div className='flex justify-between items-end'>
						<h2 className='text-lg font-extrabold text-black'>
							{title}
						</h2>
						{totalPrice && data && data.length !== 0 ? (
							<p className='text-black text-lg font-extrabold'>
								${totalPrice.toFixed(2)}
							</p>
						) : null}
					</div>
				</div>
				<div
					className={`h-[400px] overflow-y-scroll scroll-smooth disable-scrollbars flex flex-col ${
						gap === 'big' ? 'gap-y-20' : 'gap-y-5'
					}`}
				>
					{data && data.length !== 0 ? (
						data.map((item) => {
							return <Component product={item} key={item.id} />
						})
					) : (
						<p className='text-center text-lg font-bold text-black'>
							Your cart is empty
						</p>
					)}
				</div>
			</div>
		</div>
	)
}
