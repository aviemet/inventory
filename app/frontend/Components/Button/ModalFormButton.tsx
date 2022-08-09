import React, { useState } from 'react'
import Button from './index'
import { Modal } from '@/Components'
import { useMantineTheme } from '@mantine/core'
import axios from 'axios'
import { Inertia } from '@inertiajs/inertia'

interface IModalFormButtonProps {
	form: React.ReactElement
	title: string
	onSubmit?: (form: Inertia.FormProps) => boolean|void
	onSuccess?: (data: { id: string|number }) => void
}

const ModalFormButton = ({ form, title, onSubmit, onSuccess }: IModalFormButtonProps) => {
	const [modalOpen, setModalOpen] = useState(false)

	const theme = useMantineTheme()

	const handleSubmit = ({ data, method, to, setError }: Inertia.FormProps) => {
		if(!to) return

		axios[method](to, { ...data, redirect: false })
			.then(response => {
				console.log({ response })
				if(response.statusText === 'OK') {
					setModalOpen(false)
					if(onSuccess) onSuccess(response.data)
				}
			})
			.catch(error => {
				if(error.response.data?.errors) {
					console.log({ errors: error.response.data.errors })
					setError(error.response.data.errors)
				}
			})

		return false // Returning false prevents the default form action
	}

	return (
		<>
			<Button onClick={ () => setModalOpen(true) } >New</Button>
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
