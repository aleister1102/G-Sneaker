import nike from '../assets/nike.png'

export default function List({ title, data, Component, gap, totalPrice }) {
	return (
		<div className='w-5/6 md:w-2/5 lg:w-[30%] xl:w-1/6 h-[500px] font-rubik pt-3 px-7 rounded-[28px] shadow-slate-300 shadow-md relative overflow-hidden bg-white'>
			<div className='absolute rounded-[50%] h-56 w-56 bg-yellow -top-20 -left-32'></div>
			<div className='relative z-10'>
				<div className='pb-3'>
					<img src={nike} alt='' className='w-10 mb-3' />
					<div className='flex justify-between items-end'>
						<h2 className='text-lg font-extrabold text-black'>
							{title}
						</h2>
						{totalPrice !== undefined ? (
							<p className='text-black text-lg font-extrabold'>
								${totalPrice.toFixed(2).replace('-', '')}
							</p>
						) : null}
					</div>
				</div>
				<div
					className={`h-[420px] overflow-y-scroll scroll-smooth disable-scrollbars flex flex-col pb-6 ${
						gap === 'big' ? 'gap-y-20' : 'gap-y-5'
					}`}
				>
					{data && data.length !== 0 ? (
						data.map((item) => {
							return <Component product={item} key={item.id} />
						})
					) : (
						<p className='text-lg text-black'>
							Your cart is empty.
						</p>
					)}
				</div>
			</div>
		</div>
	)
}
