import React, { useState } from 'react'
import { Button, Modal, Grid } from '@/Components'
import { Form, FormConsumer, NumberInput, Submit } from '@/Components/Form'
import { Checkbox } from '@/Components/Inputs'
import { ReplenishIcon } from '@/Components/Icons'
import { Tooltip, type ButtonProps, useMantineTheme } from '@mantine/core'
import { Routes } from '@/lib'
import axios from 'axios'
import { router } from '@inertiajs/react'
import { type UseFormProps } from 'use-inertia-form'
import { useContrastingTextColor } from '@/lib/hooks'

const defaultData = { consumable: { qty: 1 } }

interface ReplenishButtonProps extends ButtonProps {
	consumable: Schema.Consumable
	disabled?: boolean
	tooltipMessage?: string | false | null
}

const ReplenishButton = ({ consumable, disabled, tooltipMessage, ...props }: ReplenishButtonProps) => {
	const [opened, setOpened] = useState(false)
	const { other: { colors: { replenishButtonColor } } } = useMantineTheme()

	const handleTogglePurchaseOrder = (form: UseFormProps<typeof defaultData>) => {

	}

	const handleSubmit = ({ method, to, getData, setError }: UseFormProps<typeof defaultData>) => {
		if(!to) return
		axios[method](to, {
			consumable: {
				qty: Math.floor(getData('consumable.qty')) + (consumable.qty ?? 0),
			},
			redirect: false,
		})
			.then(response => {
				if(response.statusText === 'OK' || response.statusText === 'Created') {
					setOpened(false)
					router.reload({ only: ['flash', 'consumables'] })
				}
			})
			.catch(error => {
				if(error.response.data?.errors) {
					setError(error.response.data.errors)
				}
			})

		// Return false to prevent page navigation
		return false
	}

	const textColor = useContrastingTextColor(replenishButtonColor)

	return (
		<>
			<Modal
				opened={ opened }
				onClose={ () => setOpened(false) }
				title={ `Replenish ${consumable?.name ? consumable.name : 'Consumable'}` }
			>
				<Form
					model="consumable"
					data={ defaultData }
					method="patch"
					to={ Routes.apiConsumable(consumable) }
					onSubmit={ handleSubmit }
				>
					<Grid>

						<Grid.Col>
							<NumberInput name="qty" label="Quantity" min={ 0 } />
						</Grid.Col>

						<Grid.Col>
							<FormConsumer>{ (form) => (
								<Checkbox label="Create Purchase Order" onChange={ () => handleTogglePurchaseOrder(form) } />
							) }</FormConsumer>
						</Grid.Col>

						<Grid.Col>
							<Submit>Replenish</Submit>
						</Grid.Col>

					</Grid>
				</Form>
			</Modal>

			<Tooltip
				withArrow
				label={ tooltipMessage || `Replenish ${consumable.name}` }
				position="left"
				transitionProps={ { transition: 'fade' } }
				color={ replenishButtonColor }
				c={ textColor }
				aria-label={ `Replenish ${consumable.name}` }
			>
				<Button color={ replenishButtonColor } { ...props } size="sm" onClick={ () => setOpened(true) }>
					<ReplenishIcon color={ textColor } />
				</Button>
			</Tooltip>
		</>
	)
}

export default ReplenishButton
