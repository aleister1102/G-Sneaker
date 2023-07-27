import { useState, useContext } from 'react'
import { Context } from './ContextProvider'
import trash from '../assets/trash.png'

export default function CartItem({ product }) {
	const { id, image, name, price, color } = product
	const { totalPrice, removeFromCart, updateTotalPrice } = useContext(Context)
	const [quantity, setQuantity] = useState(1)

	function handleIncrease() {
		updateTotalPrice(totalPrice + price)
		setQuantity((quantity) => quantity + 1)
	}

	function handleDecrease() {
		if (quantity - 1 === 0) removeFromCart(id)
		updateTotalPrice(totalPrice - price)
		setQuantity((quantity) => quantity - 1)
	}

	function handleRemove() {
		removeFromCart(id)
		updateTotalPrice(totalPrice - quantity * price)
	}

	return (
		<div className='flex justify-between'>
			<div className='w-24 h-24 flex items-center justify-center relative'>
				<div
					style={{ backgroundColor: color }}
					className='w-16 h-16 rounded-[50%] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-[36%]'
				></div>
				<img
					src={image}
					alt='a shoe'
					loading='lazy'
					className='absolute z-10 -rotate-[24deg] -top-3 -left-3 w-full h-full object-contain'
				/>
			</div>
			<div className='flex flex-col pt-4 flex-1'>
				<h3 className='text-xs font-bold'>{name}</h3>
				<p className='text-sm font-bold my-2'>${price}</p>
				<div className='flex justify-between'>
					<div>
						<button
							className='bg-light-gray w-7 h-7 rounded-[50%] text-sm font-bold'
							onClick={handleDecrease}
						>
							-
						</button>
						<span className='mx-3'>{quantity}</span>
						<button
							className='bg-light-gray w-7 h-7 rounded-[50%] text-sm font-bold'
							onClick={handleIncrease}
						>
							+
						</button>
					</div>
					<button
						className='bg-yellow w-7 h-7 rounded-[50%] flex justify-center items-center'
						onClick={handleRemove}
					>
						<img
							src={trash}
							alt=''
							className='w-[70%] h-[70%] object-contain'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}
