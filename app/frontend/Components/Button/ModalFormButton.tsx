import React, { useState } from 'react'
import Button from './index'
import { Modal } from '@/Components'
import { useMantineTheme } from '@mantine/core'

interface IModalFormButtonProps {
	form: React.ReactElement
	model: string
}

const ModalFormButton = ({ form, model }: IModalFormButtonProps) => {
	const [modalOpen, setModalOpen] = useState(false)

	const theme = useMantineTheme()

	return (
		<>
			<Button
				onClick={ () => setModalOpen(true) }
			>New</Button>
			<Modal
				opened={ modalOpen }
				onClose={ () => setModalOpen(false) }
				title={ `Create New ${model}` }
				size={ theme.breakpoints.md }
			>
				{ form }
			</Modal>
		</>
	)
}

export default ModalFormButton
