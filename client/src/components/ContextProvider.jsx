import React, { useState } from 'react'
import data from '../data/shoes.json'

export const Context = React.createContext({})

export default function ContextProvider({ children }) {
	const [products, setProducts] = useState(data.shoes)
	const [cartItems, setCartItems] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)

	function addToCart(id) {
		setCartItems((cartItems) => [
			...cartItems,
			products.find((product) => product.id === id),
		])
	}

	function removeFromCart(id) {
		setCartItems((cartItems) =>
			cartItems.filter((cartItem) => cartItem.id !== id),
		)
	}

	function updateTotalPrice(newPrice) {
		setTotalPrice(newPrice)
	}

	// console.log(cartItems)

	return (
		<Context.Provider
			value={{
				products,
				cartItems,
				totalPrice,
				addToCart,
				removeFromCart,
				updateTotalPrice,
			}}
		>
			{children}
		</Context.Provider>
	)
}
