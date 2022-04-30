import React, { useState, useRef, useEffect } from 'react'

const useEventListener = (ref, handler) => {

	const handleClickAway = e => {
		if(!ref.current?.contains(e.target)) {
			handler()
		}
	}

	const handleKeyPress = e => {
		console.log('keypress')
		console.log({ key: e.key })
		if(e.key === 'Escape' || e.key === 'Tab') {
			console.log('open and escape or tab')
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
