import { Modal } from '@mantine/core'
import React from 'react'

interface IDhcpConfirmModalProps {
	open: boolean
	setOpen: (open: boolean) => void
}

const DhcpConfirmModal = ({ open, setOpen }: IDhcpConfirmModalProps) => {
	return (
		<Modal
			centered
			opened={ open }
			onClose={ () => setOpen(false) }
			title="This address is within the DHCP range"
		>
			<p>Are you sure you want to assign a static address within the DHCP range for this subnet?</p>

		</Modal>
	)
}

export default DhcpConfirmModal
