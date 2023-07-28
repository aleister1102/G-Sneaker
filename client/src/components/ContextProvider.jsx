import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import axios from 'axios'

const API = 'https://g-sneaker-ro3h.onrender.com/api/v1'

export const Context = React.createContext({})

async function updateProduct(product) {
	try {
		const updatedProduct = axios.put(
			`${API}/products/${product.productId}`,
			product,
		)
		return updatedProduct
	} catch (e) {
		console.log(e.message)
	}
}

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

	useEffect(() => {
		setTotalPrice(
			cartItems.reduce((total, product) => total + product.price, 0),
		)
	}, [cartItems])

	function addToCart(productId) {
		const product = products.find(
			(product) => product.productId === productId,
		)
		setCartItems((cartItems) => [...cartItems, product])
		updateProduct({ ...product, isInCart: true })
	}

	function removeFromCart(productId) {
		const product = products.find(
			(product) => product.productId === productId,
		)
		const inCartProducts = cartItems.filter(
			(cartItem) => cartItem.productId !== product.productId,
		)
		setCartItems(inCartProducts)
		updateProduct({ ...product, isInCart: false })
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
