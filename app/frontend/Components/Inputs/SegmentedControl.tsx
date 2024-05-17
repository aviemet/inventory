import React, { forwardRef } from 'react'
import {
	SegmentedControl,
	type SegmentedControlProps as MantineSegmentedControlProps,
	type SegmentedControlItem,
} from '@mantine/core'
import Label from './Label'
import { type BaseInputProps } from '.'
import InputWrapper from './InputWrapper'

interface ControlOption extends SegmentedControlItem {
	defaultModel?: TAssignToable
}

export interface SegmentedControlProps extends Omit<MantineSegmentedControlProps, 'data'>, BaseInputProps {
	label?: string
	labelPosition?: 'start'|'end'
	name: string
	options: ControlOption[]
	id?: string
	required?: boolean
}

const SegmentedControlComponent = forwardRef((
	{
		label,
		labelPosition = 'start',
		options,
		name,
		id,
		value,
		required,
		onChange,
		wrapper,
		...props
	}: SegmentedControlProps,
	ref,
) => {
	const LabelComponent = () => <Label required={ required } htmlFor={ id }>{ label }</Label>

	return (
		<InputWrapper wrapper={ wrapper }>
			{ label && labelPosition === 'start' && <LabelComponent /> }
			<SegmentedControl
				value={ value }
				onChange={ (choice: string) => {
					onChange?.(choice)
				} }
				data={ options }
				color="primary"
				{ ...props }
			/>
			{ label && labelPosition === 'end' && <LabelComponent /> }
		</InputWrapper>
	)
})

export default SegmentedControlComponent
