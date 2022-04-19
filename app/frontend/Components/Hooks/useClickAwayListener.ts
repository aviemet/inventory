import React, { useEffect } from 'react'

const useClickAwayListener = (ref: React.RefObject<HTMLElement>, onClickAway?: Function) => {
	useEffect(() => {
		const handleClickAway = e => {
			if(!ref.current?.contains(e.target)) {
				if(onClickAway) onClickAway()
			}
		}

		const handleEscKey = e => {
			if(e.key === 'Escape') {
				if(onClickAway) onClickAway()
			}
		}

		document.addEventListener('click', handleClickAway)
		document.addEventListener('keydown', handleEscKey)

		return () => {
			document.removeEventListener('click', handleClickAway)
			document.removeEventListener('keydown', handleEscKey)
		}
	}, [ref, onClickAway])

}

export default useClickAwayListener
