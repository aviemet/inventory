import React from 'react'
import RichTextEditor, { type IRichTextEditorProps } from '../RichTextEditor'
import Label from './Label'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface IRichTextProps extends IRichTextEditorProps, IInputProps {
	label?: React.ReactNode
	value: string
	required?: boolean
	id?: string
	name?: string
}

const RichText = ( { label, name, required = false, id, value, wrapper, ...props }: IRichTextProps) => {
	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<RichTextEditor id={ inputId } { ...props }>{ value }</RichTextEditor>
		</InputWrapper>
	)
}

export default RichText
