import React from 'react'
import { ColumnsIcon } from '@/Components/Icons'
import { Popover, Option } from '@/Components/Popover'
import tw from 'twin.macro'
import { Form, Checkbox } from '@/Components/Form'
import { Routes } from '@/lib'
import { useTableContext } from '../TableContext'

const ColumnPicker = () => {
	return (
		<div tw="absolute top-0 right-0 w-10 h-full bg-brand-light">
			<Popover icon={ ColumnsIcon } tw="p-1 h-full">
				<Form
					model="user"
					data={ { thing: 'ok' } }
					to={ Routes.user(1) }
					grid={ false }
				>
					<Option bubble={ false }>
						<Checkbox
							name="thing"
							label="Field"
							labelPosition="end"
						/>
					</Option>
				</Form>
			</Popover>
		</div>
	)
}

export default ColumnPicker
