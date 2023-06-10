import React from 'react'
// import { RichTextEditor, type RichTextEditorProps } from '@mantine/rte'
import RichTextEditor, { type IRichTextEditorProps } from '../RichTextEditor'
import Label from './Label'

export interface IRichTextProps extends IRichTextEditorProps {
	label?: React.ReactNode
	value: string
	required?: boolean
	id?: string
	name?: string
}

const RichText = ( { label, name, required = false, id, value, ...props }: IRichTextProps) => {
	const inputId = id || name

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<RichTextEditor id={ inputId } { ...props }>{ value }</RichTextEditor>
		</>
	)
}

export default RichText
