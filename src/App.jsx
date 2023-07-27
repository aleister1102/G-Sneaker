import Card from './components/Card'
import OurProduct from './components/OurProduct'
import './App.css'

function App() {
	return (
		<div className='h-screen flex flex-wrap justify-center items-center relative overflow-hidden'>
			<div className='bg-yellow w-[400%] h-[100%] rounded-[80%] absolute top-[460px] -left-[200px]'></div>
			<OurProduct />
		</div>
	)
}

export default App
