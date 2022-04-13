import React from 'react'

const useClickAwayListener = (ref: React.RefObject<HTMLElement>, callback: Function) => {
	const startClickListener = (callback?: Function) => {
		document.addEventListener('click', handleClickAway)
		document.addEventListener('keydown', handleEscKey)
		if(callback) callback()
	}

	const handleClickAway = e => {
		if(!ref.current?.contains(e.target)) {
			cancelClickListener(callback)
		}
	}

	const handleEscKey = e => {
		if(e.key === 'Escape') {
			cancelClickListener(callback)
		}
	}

	const cancelClickListener = (callback?: Function) => {
		document.removeEventListener('click', handleClickAway)
		document.removeEventListener('keydown', handleEscKey)
		if(callback) callback()
	}

	return { startClickListener, cancelClickListener }
}

export default useClickAwayListener
