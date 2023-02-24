import React from 'react'
import FormGroup from './FormGroup'
import { NestedFields, NestedFieldsProps } from 'use-inertia-form'

const FieldsFor = ({ children, model }: NestedFieldsProps) => {
	return (
		<NestedFields model={ model }>
			<FormGroup className="fields_for">{ children }</FormGroup>
		</NestedFields>
	)
}

export default FieldsFor
