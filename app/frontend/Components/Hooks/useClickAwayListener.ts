import React from 'react'

const useClickAwayListener = (ref: React.RefObject<HTMLElement>, clickAwayCallback: Function) => {
	const startClickListener = (callback?: Function) => {
		document.addEventListener('click', handleClickAway)
		if(callback) callback()
	}

	const handleClickAway = e => {
		if(!ref.current?.contains(e.target)) {
			cancelClickListener(clickAwayCallback)
		}
	}

	const cancelClickListener = (callback?: Function) => {
		document.removeEventListener('click', handleClickAway)
		if(callback) callback()
	}

	return { startClickListener, cancelClickListener }
}

export default useClickAwayListener
