import React, { forwardRef } from 'react'
import cx from 'classnames'
import tw, { styled, css } from 'twin.macro'

export type TOption = {
	label: string
	value: string
}

interface IRadioButtonsProps {
	label?: string
	labelPosition?: 'start'|'end'
	name: string
	options: TOption[]
	id?: string
	value?: string | number | readonly string[]
	onChange?: Function
}

const RadioButtons = ({ label, labelPosition = 'start', options, name, id, value, onChange }: IRadioButtonsProps) => {
	const parseId = (value: string): string => {
		return `${name}_${value}`.trim().toLowerCase()
	}

	return (
		<>
			{ label && labelPosition === 'start' && <label htmlFor={ id }>{ label }</label> }
			<div tw="flex w-full">
				{ options.map((option, i) => {
					const optionId = parseId(option.value)

					return (
						<React.Fragment key={ option.value }>
							<RadioInput
								name={ name }
								id={ optionId }
								type="radio"
								value={ option.value }
								checked={ option.value === value }
								onChange={ e => {
									if(onChange) onChange(e.target.value)
								} }
							/>
							<OptionLabel htmlFor={ optionId }>
								{ option.label }
							</OptionLabel>
						</React.Fragment >
					)
				}) }
			</div>
			{ label && labelPosition === 'end' && <label htmlFor={ id }>{ label }</label> }
		</>
	)
}

export default RadioButtons

const OptionLabel = styled.label`
	${tw`max-w-none relative flex-1 inline-block overflow-hidden`}
	${tw`border-r border-gray-600`}
	${tw`p-2 m-0`}
	${tw`text-center text-white uppercase`}
	${tw`cursor-pointer`}

	&:first-of-type {
		border-radius: 0.25rem 0 0 0.25rem;
	}
	&:last-of-type {
		border-radius: 0 0.25rem 0.25rem 0;
		border-right: none;
	}
`

const RadioInput = styled.input`
	${tw`visually-hidden`}
	
	&:not(:checked) + label {
		${tw`bg-gray-400`}

		&:hover {
			${tw`bg-brand-light`}
		}
	}

	&:checked + label {
		${tw`bg-brand`}
	}
`
