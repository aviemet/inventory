import React from 'react'
import { RichTextEditor, type RichTextEditorProps } from '@mantine/rte'
import Label from './Label'

export interface IRichTextProps extends RichTextEditorProps {
	label?: string
	name: string
	required?: boolean
	id?: string
}

const RichText = ( { label, name, required = false, id, ...props }: IRichTextProps) => {
	return (
		<>
			{ label && <Label required={ required } htmlFor={ id }>
				{ label }
			</Label> }
			<RichTextEditor id={ id } { ...props } sx={ {
				minHeight: '500px',
				'.quill': {
					height: '100%',
				},
			} } />
		</>
	)
}

export default RichText
