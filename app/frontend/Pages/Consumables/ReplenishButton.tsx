import React, { useState } from 'react'
import { Button, Modal } from '@/Components'
import { Form, NumberInput, Submit } from '@/Components/Form'
import { Checkbox } from '@/Components/Inputs'
import { ReplenishIcon } from '@/Components/Icons'
import { Tooltip, type ButtonProps, useMantineTheme } from '@mantine/core'
import { Routes } from '@/lib'
import axios from 'axios'
import { router } from '@inertiajs/react'
import { type UseFormProps } from 'use-inertia-form'

const defaultData = { consumable: { qty: 1 } }

interface IReplenishButtonProps extends ButtonProps {
	consumable: Schema.Consumable
	disabled?: boolean
	tooltipMessage?: string | false | null
}

const ReplenishButton = ({ consumable, disabled, tooltipMessage, ...props }: IReplenishButtonProps) => {
	const [opened, setOpened] = useState(false)
	const { other: { colors: { replenishButtonColor } } } = useMantineTheme()

	const handleTogglePurchaseOrder = (e: React.ChangeEvent<HTMLInputElement>) => {

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
					<NumberInput name="qty" label="Quantity" min={ 0 } />

					<Checkbox label="Create Purchase Order" onChange={ handleTogglePurchaseOrder } />

					<Submit>Replenish</Submit>
				</Form>
			</Modal>
			<Tooltip
				withArrow
				label={ tooltipMessage || 'Replenish' }
				position="left"
				transitionProps={ { transition: 'fade' } }
				color={ replenishButtonColor }
				aria-label={ `Replenish ${consumable.name}` }
			>
				<Button compact color={ replenishButtonColor } { ...props } size="sm" p={ 0 } onClick={ () => setOpened(true) }>
					<ReplenishIcon />
				</Button>
			</Tooltip>
		</>
	)
}

export default ReplenishButton
