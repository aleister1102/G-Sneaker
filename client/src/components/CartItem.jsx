import { useState, useContext } from 'react'
import { Context } from './ContextProvider'
import trash from '../assets/trash.png'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'

function Button({ image, handler, customClassnames }) {
	return (
		<button
			className={
				'w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 rounded-[50%] inline-flex justify-center items-center ' +
				customClassnames
			}
			onClick={handler}
		>
			{image}
		</button>
	)
}

export default function CartItem({ product }) {
	const { productId, image, name, price, color } = product
	const { totalPrice, removeFromCart, updateTotalPrice } = useContext(Context)
	const [quantity, setQuantity] = useState(1)
	const [removed, setRemoved] = useState(false)

	function handleIncrease() {
		updateTotalPrice(totalPrice + price)
		setQuantity((quantity) => quantity + 1)
	}

	function handleDecrease() {
		if (quantity - 1 === 0) removeFromCart(productId)
		updateTotalPrice(totalPrice - price)
		setQuantity((quantity) => quantity - 1)
	}

	function handleRemove() {
		setRemoved(true)
		setTimeout(() => {
			removeFromCart(productId)
			updateTotalPrice(totalPrice - quantity * price)
		}, 800)
	}

	return (
		<div className={`flex justify-between ${removed && 'animate-shrink'}`}>
			<div
				className={`w-28 h-28 md:w-24 md:h-24 lg:w-24 lg:h-24 flex items-center justify-center relative animate-grow`}
			>
				<div
					style={{ backgroundColor: color }}
					className='w-20 h-20 rounded-[50%] absolute left-0'
				></div>
				<img
					src={image}
					alt='a shoe'
					loading='lazy'
					className='absolute z-10 -rotate-[24deg] object-contain h-[125%] w-[125%] lg:-top-5 lg:-left-2 lg:scale-100 -top-6 -left-4 scale-[85%]'
				/>
			</div>
			<div className='flex flex-col pt-4 flex-1'>
				<h3 className='text-sm md:text-xs lg:text-xs font-bold animate-[slide-from-right_3s_linear]'>
					{name}
				</h3>
				<p className='text-lg md:text-sm lg:text-sm font-bold my-2 animate-[slide-from-right_3.1s_linear]'>
					${price}
				</p>
				<div className='flex justify-between animate-[slide-from-right_3.2s_linear]'>
					<div>
						<Button
							image={
								<img
									src={minus}
									alt='minus'
									className='object-contain w-1/3 h-1/3'
								/>
							}
							handler={handleDecrease}
							customClassnames={'bg-light-gray '}
						/>
						<span className='mx-3 md:text-sm lg:text-md text-sm'>
							{quantity}
						</span>
						<Button
							image={
								<img
									src={plus}
									alt='plus'
									className='object-contain w-1/3 h-1/3'
								/>
							}
							handler={handleIncrease}
							customClassnames={'bg-light-gray'}
						/>
					</div>
					<Button
						image={
							<img
								src={trash}
								alt=''
								className='object-contain w-[70%] h-[70%]'
							/>
						}
						handler={handleRemove}
						customClassnames={'bg-yellow'}
					/>
				</div>
			</div>
		</div>
	)
}
