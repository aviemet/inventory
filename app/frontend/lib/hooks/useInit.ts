import { useEffect } from "react"

export function useInit(cb: Function) {
	useEffect(() => {
		cb()
		// eslint-disable-next-line
	}, [])
}

