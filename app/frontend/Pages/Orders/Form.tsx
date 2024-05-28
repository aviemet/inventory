import React from 'react'
import {
	Form,
	Textarea,
	Submit,
	TextInput,
	FormConsumer,
} from '@/Components/Form'
import { FormVendorsDropdown } from '@/Features/Dropdowns'
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
			filter={ ['cost', 'vendor'] }
		>
			<FormConsumer>{ ({ data }) => {
				console.log({ data })
				return <></>
			} }</FormConsumer>
			<TextInput name="number" label="Order Number" />

			<FormVendorsDropdown initialData={ coerceArray(order?.vendor) } />

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ order.id ? 'Update' : 'Create' } Order
			</Submit>

		</Form>
	)
}

export default OrderForm
