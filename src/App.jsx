import './App.css'
import Card from './components/Card'
import Product from './components/Product'
import CartItem from './components/CartItem'
import { useContext } from 'react'
import { Context } from './components/ContextProvider'

function App() {
	const { products, cartItems, totalPrice } = useContext(Context)

	return (
		<div className='h-screen flex flex-wrap justify-center items-center gap-x-10 relative overflow-hidden'>
			<div className='bg-yellow w-[400%] h-[100%] rounded-[80%] absolute top-[360px] -left-[280px]'></div>
			<Card
				title={'Our Products'}
				data={products}
				Component={Product}
				gap={'big'}
			/>
			<Card
				title={'Your Cart'}
				data={cartItems}
				Component={CartItem}
				gap={'small'}
				totalPrice={totalPrice}
			/>
		</div>
	)
}

export default App
