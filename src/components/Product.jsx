import { useContext, useState, useEffect } from 'react'
import { Context } from './ContextProvider'
import check from '../assets/check.png'

export default function Product({ product }) {
	const { id, image, name, description, price, color } = product
	const { cartItems, totalPrice, addToCart, updateTotalPrice } =
		useContext(Context)
	const [added, setAdded] = useState(false)

	function handleAddToCart() {
		if (added) return
		addToCart(id)
		updateTotalPrice(totalPrice + price)
		setAdded(true)
	}

	useEffect(() => {
		const isInCart = cartItems.find((cartItem) => cartItem.id === id)
		if (!isInCart) setAdded(false)
	}, [cartItems])

	return (
		<div>
			<div
				className='bg-slate-300 rounded-[28px] p-2 flex justify-center items-center h-[20rem]'
				style={{ backgroundColor: color }}
			>
				<img
					src={image}
					alt='a shoe'
					className='origin-bottom -rotate-[24deg] translate-x-11'
					loading='lazy'
				/>
			</div>
			<div className='mt-5 text-black'>
				<h3 className='text-lg font-bold'>{name}</h3>
				<p className='mt-4 text-gray'>{description}</p>
				<div className='flex items-center justify-between mt-4 font-bold h-10'>
					<span className='text-md'>${price}</span>
					<button
						type='button'
						className={`bg-yellow h-full ${
							added
								? 'rounded-[50%] w-10 p-3'
								: 'rounded-[28px] px-3 py-2'
						}`}
						onClick={handleAddToCart}
					>
						{added ? (
							<img
								src={check}
								alt=''
								loading='lazy'
								className='w-full h-full object-contain'
							/>
						) : (
							<p className='font-extrabold uppercase text-xs'>
								Add to cart
							</p>
						)}
					</button>
				</div>
			</div>
		</div>
	)
}
