import React, { useState } from 'react'
import Button from './index'
import { Modal } from '@/Components'
import { useMantineTheme, type ModalProps, type ButtonProps } from '@mantine/core'
import axios from 'axios'

interface IModalFormButtonProps {
	children?: string | React.ReactElement
	form: React.ReactElement
	title: string
	buttonProps?: ButtonProps
	modalProps?: Partial<ModalProps>
	onSubmit?: (form: Inertia.FormProps) => boolean|void
	onSuccess?: (data: { id: string|number }) => void
}

const ModalFormButton = ({ children = 'New', form, title, buttonProps = {}, modalProps = {}, onSubmit, onSuccess }: IModalFormButtonProps) => {
	const [modalOpen, setModalOpen] = useState(false)

	const theme = useMantineTheme()

	const handleSubmit = ({ data, method, to, setError }: Inertia.FormProps) => {
		if(!to) return

		axios[method](to, { ...data, redirect: false })
			.then(response => {
				if(response.statusText === 'OK' || response.statusText === 'Created') {
					setModalOpen(false)
					if(onSuccess) onSuccess(response.data)
				}
			})
			.catch(error => {
				if(error.response.data?.errors) {
					setError(error.response.data.errors)
				}
			})

		return false // Returning false prevents the default form action
	}

	return (
		<>
			<Button onClick={ () => setModalOpen(true) } { ...buttonProps } >{ children }</Button>
			<Modal
				opened={ modalOpen }
				onClose={ () => setModalOpen(false) }
				title={ title }
				{ ...Object.assign({ size: theme.breakpoints.md }, modalProps) }
			>
				{ React.cloneElement(form, {
					onSubmit: onSubmit ? onSubmit : handleSubmit,
				}) }
			</Modal>
		</>
	)
}

export default ModalFormButton
