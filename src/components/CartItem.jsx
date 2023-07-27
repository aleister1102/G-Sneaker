import { useState, useContext } from 'react'
import { Context } from './ContextProvider'
import trash from '../assets/trash.png'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'

function Button({ image, handler, customClassnames }) {
	return (
		<button
			className={
				'w-6 h-6 lg:w-7 lg:h-7 rounded-[50%] inline-flex justify-center items-center ' +
				customClassnames
			}
			onClick={handler}
		>
			{image}
		</button>
	)
}

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
			<div className='w-28 h-28 lg:w-24 lg:h-24 flex items-center justify-center relative'>
				<div
					style={{ backgroundColor: color }}
					className='w-20 h-20 lg:w-16 lg:h-16 rounded-[50%] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-[36%]'
				></div>
				<img
					src={image}
					alt='a shoe'
					loading='lazy'
					className='absolute z-10 -rotate-[24deg] -top-3 -left-4 w-full h-full object-contain'
				/>
			</div>
			<div className='flex flex-col pt-4 flex-1'>
				<h3 className='text-sm lg:text-xs font-bold'>{name}</h3>
				<p className='text-lg lg:text-sm font-bold my-2'>${price}</p>
				<div className='flex justify-between'>
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
						<span className='mx-3 lg:text-base text-sm'>
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
