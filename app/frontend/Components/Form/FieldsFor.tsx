import React from 'react'
import FormGroup from './FormGroup'
import { NestedFields, NestedFieldsProps } from 'use-inertia-form'

interface IFieldsForProps extends NestedFieldsProps {
	legend?: string
}

const FieldsFor = ({ children, model, legend }: IFieldsForProps) => {
	return (
		<NestedFields model={ model }>
			<FormGroup className="fields_for" legend={ legend }>
				{ children }
			</FormGroup>
		</NestedFields>
	)
}

export default FieldsFor
