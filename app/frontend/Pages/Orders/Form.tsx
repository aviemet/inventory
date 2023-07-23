import React from 'react'
import {
	Form,
	Input,
	Textarea,
	SearchableDropdown,
	Checkbox,
	DateTime,
	Submit,
	FormGroup,
} from '@/Components/Form'
import { Routes } from '@/lib'
import VendorsForm from '@/Pages/Vendors/Form'
import ModelsForm from '@/Pages/Models/Form'
import { VendorsDropdown } from '@/Components/Dropdowns'
import { Menu } from '@/Components'
import { PlusCircleIcon } from '@/Components/Icons'

export interface IOrderFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	order: Schema.Order
	vendors: Schema.Vendor[]
}

const OrderForm = ({ to, method = 'post', onSubmit, order, vendors }: IOrderFormProps) => {
	return (
		<Form
			model="order"
			data={ { order } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<VendorsDropdown
				vendors={ vendors }
			/>

			<Menu position="bottom-end">
				<Menu.Target color="primary" variant="filled" icon={ <PlusCircleIcon /> } />
				<Menu.Dropdown>
					<Menu.Item>Thing</Menu.Item>
				</Menu.Dropdown>
			</Menu>


			<Textarea name="notes" label="Notes" />

			<Submit>
				{ order.id ? 'Update' : 'Create' } Order
			</Submit>

		</Form>
	)
}

export default React.memo(OrderForm)
