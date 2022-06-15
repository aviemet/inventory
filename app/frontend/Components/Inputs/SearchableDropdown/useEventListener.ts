import React, { useEffect } from 'react'

const useEventListener = (ref, handler: () => void) => {

	const handleClickAway = (e: MouseEvent) => {
		if(!ref.current?.contains(e.target)) {
			handler()
		}
	}

	const handleKeyPress = (e: KeyboardEvent) => {
		if(e.key === 'Escape' || e.key === 'Tab') {
			handler()
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickAway)
		document.addEventListener('keydown', handleKeyPress)

		return () => {
			document.removeEventListener('click', handleClickAway)
			document.removeEventListener('keydown', handleKeyPress)
		}
	}, [ref, handler])
}

export default useEventListener
