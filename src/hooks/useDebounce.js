import { useState, useEffect } from 'react'

function useDebounce(value, delay) {
	const [valueDebounce, setValueDebounce] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setValueDebounce(value)
		}, delay)

		return () => clearTimeout(handler)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value])

	return valueDebounce
}

export default useDebounce
