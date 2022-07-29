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

			<Input name="name" label="Name" required autoFocus />

			<SearchableDropdown
				name="vendors"
				label="Vendor"
				options={ vendors }
			/>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ order.id ? 'Update' : 'Create' } Order
			</Submit>

		</Form>
	)
}

export default React.memo(OrderForm)
