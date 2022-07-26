import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import axios from 'axios'
import { Menu } from '@/Components'
import { ColumnsIcon } from '@/Components/Icons'
import { Checkbox } from '@/Components/Inputs'
import { useTableContext } from '../TableContext'
import { Button } from '@mantine/core'

interface IColumnPickerProps {
	model: string
}

const ColumnPicker = ({ model }: IColumnPickerProps) => {
	const { props: { auth: { user } } } = usePage<InertiaPage>()
	const { tableState: { columns } } = useTableContext()

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
		<Menu closeOnItemClick={ false } position="bottom-end">
			<Menu.Target>
				<Button size="md" p="xs"><ColumnsIcon size={ 24 } /></Button>
			</Menu.Target>

			<Menu.Dropdown>
				{ [...columns].map(([name, label]) => (
					<Menu.Item key={ name }>
						<Checkbox
							name={ name }
							label={ label }
							onChange={ handleChange }
							checked={ !user.table_preferences?.[model]?.hide?.[name] }
						/>
					</Menu.Item>)) }
			</Menu.Dropdown>
		</Menu>
	)
}

export default ColumnPicker
