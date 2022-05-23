import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Message from './Message'

const AuthFlash = () => {
	const { props: { flash } } = usePage<InertiaPage>()

	const messages = []

	let key: keyof FlashMessage
	for(key in flash) {
		if(flash[key]) {
			messages.push(<Message key={ key } type={ key }>{ flash[key] }</Message>)
		}
	}

	return (
		<>
			{ messages.map(message => message) }
		</>
	)
}

export default AuthFlash
