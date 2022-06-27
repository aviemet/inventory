import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import axios from 'axios'
import { ColumnsIcon } from '@/Components/Icons'
import { Checkbox } from '@/Components/Inputs'
import { useTableContext } from '../TableContext'
import { Button, Popover, Box } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

interface IColumnPickerProps {
	model: string
}

const ColumnPicker = ({ model }: IColumnPickerProps) => {
	const { props: { auth: { user } } } = usePage<InertiaPage>()
	const { tableState: { columns } } = useTableContext()
	const [open, handlers] = useDisclosure(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		axios.patch( Routes.updateTablePreferences(user.id), {
			user: {
				table_preferences: {
					[model]: {
						hide: {
							[e.target.name]: !e.target.checked
						}
					}
				}
			}
		}).then(() => {
			Inertia.reload({ only: ['auth'] })
		})
	}

	return (
		<Popover
			opened={ open }
			onClose={ handlers.close }
			target={ <Button onClick={ handlers.toggle } size="md" p="sm"><ColumnsIcon /></Button> }
			position="bottom"
			placement="end"
			spacing="xs"
		>
			{ [...columns].map(([name, label]) => (
				<Box key={ name } p={ 4 }>
					<Checkbox
						name={ name }
						label={ label }
						onChange={ handleChange }
						checked={ !user.table_preferences?.[model]?.hide?.[name] }
					/>
				</Box>)) }
		</Popover>
	)
}

export default ColumnPicker
