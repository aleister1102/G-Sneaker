import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const API = import.meta.env.VITE_API

export const Context = React.createContext({})

export default function ContextProvider({ children }) {
	const [products, setProducts] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)

	const data = useFetch(`${API}/products`)

	useEffect(() => {
		setProducts(data)
	}, [data])

	useEffect(() => {
		setCartItems(products.filter((product) => product.isInCart))
	}, [products])

	function addToCart(productId) {
		setCartItems((cartItems) => [
			...cartItems,
			products.find((product) => product.productId === productId),
		])
	}

	function removeFromCart(productId) {
		setCartItems((cartItems) =>
			cartItems.filter((cartItem) => cartItem.productId !== productId),
		)
	}

	function updateTotalPrice(newPrice) {
		setTotalPrice(newPrice)
	}

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
