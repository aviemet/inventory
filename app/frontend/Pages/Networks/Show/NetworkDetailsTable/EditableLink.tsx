import React, { useState, useEffect, useRef } from 'react'
import { Routes } from '@/lib'
import { Link, Group } from '@/Components'
import { Form } from '@/Components/Form'
import { EditIcon, CrossIcon } from '@/Components/Icons'
import { ActionIcon, Box } from '@mantine/core'
import cx from 'classnames'
import DhcpConfirmModal from './DhcpConfirmModal'

import { useNetworkContext } from '..'
import IPAddress from '@/lib/IPAddress'
import { FormItemsDropdown } from '@/Features'

interface EditableLinkProps {
	item?: Schema.ItemsOptions
	ip?: string
}

const EditableLink = ({ item, ip }: EditableLinkProps) => {
	const { network } = useNetworkContext()

	const [editing, setEditing] = useState(false)
	const [confirmInDhcp, setConfirmInDhcp] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)

	const dropdownRef = useRef<HTMLInputElement>(null)
	// const clickOutsideRef = useClickOutside(useCallback(() => {
	// 	if(!modalOpen) {
	// 		setEditing(false)
	// 	}
	// }, [modalOpen]))

	const handleEditButton = () => {
		const withinDhcp = withinDhcpRange()

		if(!editing && withinDhcp) {
			setModalOpen(true)
		} else {
			setEditing(prevEditing => !prevEditing)
		}
	}

	const withinDhcpRange = () => {
		if(!ip || !network.dhcp_start || !network.dhcp_end) return true

		const host = new IPAddress(ip)

		return host.between(new IPAddress(network.dhcp_start), new IPAddress(network.dhcp_end))
	}

	useEffect(() => {
		if(!modalOpen && confirmInDhcp) {
			setEditing(true)
		}
	}, [modalOpen])

	useEffect(() => {
		if(editing && dropdownRef.current) {
			dropdownRef.current.focus()
		}
	}, [dropdownRef.current])

	return (
		<>
			<Group>
				<Box style={ {
					flex: 1,
					flexGrow: 1,
					flexShrink: 0,
				} }>
					{
						editing ?
							<Form
								disableFormatting
								model="item"
								data={ { item } }
								async
								to={ '#' /* TODO: API route for setting IP address on item */ }
							>
								<FormItemsDropdown
									label={ false }
									name="id"
									size="xs"
									wrapper={ false }
								/>
							</Form>
							:
							item && <Link href={ Routes.item(item) }>{ item.name }</Link>
					}
				</Box>
				<Box style={ {
					flex: 0,
					flexGrow: 0,
					flexShrink: 1,
				} }>
					<ActionIcon
						onClick={ handleEditButton }
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
