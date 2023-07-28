import './App.css'
import List from './components/List'
import Product from './components/Product'
import CartItem from './components/CartItem'
import { useContext } from 'react'
import { Context } from './components/ContextProvider'

function App() {
	const { products, cartItems, totalPrice } = useContext(Context)

	return (
		<div className='md:h-screen lg:h-screen py-6 flex flex-col md:flex-row lg:flex-row justify-center items-center gap-y-10 md:gap-x-10 lg:gap-x-10 relative overflow-hidden'>
			<div className='bg-yellow w-[400%] h-[100%] rounded-[80%] absolute top-[360px] -left-[280px]'></div>
			<List
				title={'Our Products'}
				data={products}
				Component={Product}
				gap={'big'}
				emptyMessage={'No products found.'}
			/>
			<List
				title={'Your Cart'}
				data={cartItems}
				Component={CartItem}
				gap={'small'}
				totalPrice={totalPrice}
				emptyMessage={'Your cart is empty.'}
			/>
		</div>
	)
}

export default App
