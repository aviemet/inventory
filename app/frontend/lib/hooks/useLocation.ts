import { useState, useEffect } from 'react'
import { omit } from 'lodash'

const useLocation = () => {
	const [location, setLocation] = useState(window.location)

	const listenToPopstate = () => {
		setLocation(window.location)
	}

	useEffect(() => {
		window.addEventListener('popstate', listenToPopstate)

		return () => {
			window.removeEventListener('popstate', listenToPopstate)
		}
	}, [])

	return {
		...omit(location, [
			'toString',
			'replace',
			'reload',
			'assign',
			'ancestorOrigins',
		]),
		paths: location.pathname.replace(/^\//, '').split('/'),
	}
}

export default useLocation
