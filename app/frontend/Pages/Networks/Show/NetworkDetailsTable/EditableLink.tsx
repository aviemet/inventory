import React, { useCallback, useState, useEffect } from 'react'
import { Routes } from '@/lib'
import { Link, Group } from '@/Components'
import { Form } from '@/Components/Form'
import { EditIcon, CrossIcon } from '@/Components/Icons'
// import ItemsDropdown from '@/Components/Form/Dropdowns/ItemsDropdown'
import ItemsDropdown from './ItemsDropdown'
import { ActionIcon, Box } from '@mantine/core'
import { useClickOutside, useToggle } from '@mantine/hooks'
import cx from 'classnames'
import DhcpConfirmModal from './DhcpConfirmModal'

import { useNetworkContext } from '..'
import IPAddress from '@/lib/IPAddress'

interface IEditableLinkProps {
	item?: Schema.Item
	ip?: string
}

const EditableLink = ({ item, ip }: IEditableLinkProps) => {
	const { network } = useNetworkContext()

	const [editing, toggleEditing] = useToggle([false, true])
	const [confirmInDhcp, setConfirmInDhcp] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)
	const clickOutsideRef = useClickOutside(useCallback(() => {
		if(!modalOpen) {
			toggleEditing()
		}
	}, [modalOpen]))

	const handleEdit = () => {
		const withinDhcp = withinDhcpRange()

		if(!editing && withinDhcp) {
			setModalOpen(true)
		} else {
			toggleEditing()
		}
	}

	const withinDhcpRange = () => {
		if(!ip || !network.dhcp_start || !network.dhcp_end) return true

		const host = new IPAddress(ip)

		return host.between(new IPAddress(network.dhcp_start), new IPAddress(network.dhcp_end))
	}

	useEffect(() => {
		if(!modalOpen && confirmInDhcp) {
			toggleEditing()
		}
	}, [modalOpen])

	return(
		<>
			<Group>
				<Box sx={ {
					flex: 1,
					flexGrow: 1,
					flexShrink: 0,
				} }>
					{
						editing ?
							<Form
								ref={ clickOutsideRef }
								model="items"
								data={ { item: { id: '' }, ip: '' } }
								grid={ false }
							>
								<ItemsDropdown
									label={ false }
									size="xs"
								/>
							</Form>
							:
							item && <Link href={ Routes.item(item) }>{ item.name }</Link>
					}
				</Box>
				<Box sx={ {
					flex: 0,
					flexGrow: 0,
					flexShrink: 1,
				} }>
					<ActionIcon
						onClick={ handleEdit }
						color="gray.8"
						variant="subtle"
						className={ cx({ editing }, 'item-ip-assign-button') }
					>
						{ editing ? <CrossIcon size={ 18 } /> : <EditIcon /> }
					</ActionIcon>
				</Box>
			</Group>

			<DhcpConfirmModal
				open={ modalOpen }
				setOpen={ setModalOpen }
				setConfirm={ setConfirmInDhcp }
			/>
		</>
	)
}

export default EditableLink
