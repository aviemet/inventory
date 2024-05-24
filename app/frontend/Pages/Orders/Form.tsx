import React from 'react'
import {
	Form,
	Textarea,
	Submit,
} from '@/Components/Form'
import { VendorsDropdown } from '@/Features/Dropdowns'
import { Menu } from '@/Components'
import { PlusCircleIcon } from '@/Components/Icons'
import { coerceArray } from '@/lib'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type OrderFormData = {
	order: Schema.OrdersFormData
}

export interface OrderFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<OrderFormData>) => boolean|void
	order: Schema.OrdersFormData
}

const OrderForm = ({ to, method = 'post', onSubmit, order }: OrderFormProps) => {
	return (
		<Form
			model="order"
			data={ { order } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<VendorsDropdown initialData={ coerceArray(order?.vendor) } />

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

export default OrderForm
