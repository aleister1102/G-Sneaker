import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetch(url) {
	const [data, setData] = useState([])

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await axios.get(url)
				setData(res.data)
				console.log('Data fetched!', res.data)
			} catch (e) {
				console.log(e.message)
			}
		}
		fetchData()
	}, [url])

	return data
}
