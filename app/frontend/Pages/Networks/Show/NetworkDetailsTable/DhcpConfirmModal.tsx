import React from 'react'
import { Modal } from '@mantine/core'
import { Button } from '@/Components'

interface IDhcpConfirmModalProps {
	open: boolean
	setOpen: (open: boolean) => void
	setConfirm: (confirm: boolean) => void
}

const DhcpConfirmModal = ({ open, setOpen, setConfirm }: IDhcpConfirmModalProps) => {
	const handleConfirm = () => {
		setConfirm(true)
		setOpen(false)
	}

	const handleCancel = () => {
		setConfirm(false)
		setOpen(false)
	}

	return (
		<Modal
			centered
			opened={ open }
			onClose={ () => setOpen(false) }
			title="This address is within the DHCP range"
		>
			<p>Are you sure you want to assign a static address within the DHCP range for this subnet?</p>

			<Button color="green" onClick={ handleConfirm }>Confirm</Button>
			<Button color="red" onClick={ handleCancel }>Cancel</Button>
		</Modal>
	)
}

export default DhcpConfirmModal
