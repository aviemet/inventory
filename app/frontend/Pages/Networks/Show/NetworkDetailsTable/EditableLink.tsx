import React, { useCallback, useState } from 'react'
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

interface IEditableLinkProps {
	item?: Schema.Item
	withinDhcp?: boolean
}

const EditableLink = ({ item, withinDhcp = false }: IEditableLinkProps) => {
	const [editing, toggleEditing] = useToggle([false, true])
	const [modalOpen, setModalOpen] = useState(false)
	const clickOutsideRef = useClickOutside(useCallback(() => {
		if(!modalOpen) {
			toggleEditing()
		}
	}, [modalOpen]))

	const handleEdit = () => {
		if(!editing && withinDhcp) {
			setModalOpen(true)
		}
		toggleEditing()
	}

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
			<DhcpConfirmModal open={ modalOpen } setOpen={ setModalOpen } />
		</>
	)
}

export default EditableLink
