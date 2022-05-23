import React, { useEffect, useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Message from './Message'
import 'twin.macro'
import './alerts.css'

const Flash = () => {
	const { props: { flash } } = usePage<InertiaPage>()
	const [messages, setMessages] = useState<JSX.Element[]>([])

	useEffect(() => {
		let flashMessages = []

		let key: keyof FlashMessage
		for(key in flash) {
			if(flash[key]) {
				flashMessages.push(<Message key={ key } type={ key }>{ flash[key] }</Message>)
			}
		}

		setMessages(flashMessages)
	}, [flash])

	return (
		<div tw="fixed top-14 w-full flex justify-center">
			{ messages.map(message => message) }
		</div>
	)
}

export default Flash

