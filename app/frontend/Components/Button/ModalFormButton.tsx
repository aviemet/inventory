import React, { useState } from 'react'
import Button from './index'
import { Modal } from '@/Components'
import { useMantineTheme } from '@mantine/core'
import axios from 'axios'

interface IModalFormButtonProps {
	form: React.ReactElement
	title: string
	onSubmit?: (form: Inertia.FormProps) => boolean|void
}

const ModalFormButton = ({ form, title, onSubmit }: IModalFormButtonProps) => {
	const [modalOpen, setModalOpen] = useState(false)

	const theme = useMantineTheme()

	const handleSubmit = ({ data, method, to }: Inertia.FormProps) => {
		if(!to) return

		axios[method](to, { ...data, redirect: false })
			.then(response => {
				if(response.statusText === 'OK') {
					setModalOpen(false)
				}
				console.log({ response })
			})

		return false // Returning false prevents the default form action
	}

	return (
		<>
			<Button
				onClick={ () => setModalOpen(true) }
			>New</Button>
			<Modal
				opened={ modalOpen }
				onClose={ () => setModalOpen(false) }
				title={ title }
				size={ theme.breakpoints.md }
			>
				{ React.cloneElement(form, {
					onSubmit: onSubmit ? onSubmit : handleSubmit,
				}) }
			</Modal>
		</>
	)
}

export default ModalFormButton
