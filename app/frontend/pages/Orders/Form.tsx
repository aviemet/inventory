import React from "react"
import { type HTTPVerb, type UseFormProps } from "use-inertia-form"

import { Grid } from "@/components"
import {
	Form,
	Textarea,
	Submit,
	TextInput,
} from "@/components/Form"
import { FormVendorsDropdown } from "@/features/Dropdowns"
import { coerceArray } from "@/lib"

type OrderFormData = {
	order: Schema.OrdersFormData
}

export interface OrderFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<OrderFormData>) => boolean | void
	order: Schema.OrdersFormData
}

const OrderForm = ({ to, method = "post", onSubmit, order }: OrderFormProps) => {
	return (
		<Form
			model="order"
			data={ { order } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
			filter={ ["cost", "vendor"] }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="number" label="Order Number" />
				</Grid.Col>

				<Grid.Col>
					<FormVendorsDropdown initialData={ coerceArray(order?.vendor) } />
				</Grid.Col>

				<Grid.Col>
					<Textarea name="notes" label="Notes" />
				</Grid.Col>

				<Grid.Col>
					<Submit>
						{ order.id ? "Update" : "Create" } Order
					</Submit>
				</Grid.Col>

			</Grid>
		</Form>
	)
}

export default OrderForm
