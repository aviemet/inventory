import React, { forwardRef } from 'react'
import {
	SegmentedControl,
	useMantineTheme,
	type SegmentedControlProps as MantineSegmentedControlProps,
	type SegmentedControlItem,
} from '@mantine/core'
import Label from './Label'
import { type BaseInputProps } from '.'
import InputWrapper from './InputWrapper'
import { AssignToableTypes } from '@/types/AssignToableTypes'

interface ControlOption extends SegmentedControlItem {
	defaultModel?: AssignToableTypes
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
	const theme = useMantineTheme()

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
				color={ theme.primaryColor }
				{ ...props }
			/>
			{ label && labelPosition === 'end' && <LabelComponent /> }
		</InputWrapper>
	)
})

export default SegmentedControlComponent
