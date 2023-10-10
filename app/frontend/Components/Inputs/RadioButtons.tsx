import React from 'react'
import { SegmentedControl, SegmentedControlProps, type SegmentedControlItem } from '@mantine/core'
import Label from './Label'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'

interface IOption extends SegmentedControlItem {
	defaultModel?: TAssignToable
}

export interface IRadioButtonsProps extends Omit<SegmentedControlProps, 'data'>, IInputProps {
	label?: string
	labelPosition?: 'start'|'end'
	name: string
	options: IOption[]
	id?: string
	required?: boolean
}

const RadioButtons = ({
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
}: IRadioButtonsProps) => {
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
}

export default RadioButtons
