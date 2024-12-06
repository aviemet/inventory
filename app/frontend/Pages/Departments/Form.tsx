import React from 'react'
import { Grid } from '@/Components'
import { Form, TextInput, Textarea, Submit } from '@/Components/Form'
import { FormLocationsDropdown } from '@/Features/Dropdowns'
import { coerceArray } from '@/lib'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type DepartmentForData = {
	department: Schema.DepartmentsFormData
}

export interface DepartmentFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<DepartmentForData>) => boolean | void
	department?: Schema.DepartmentsFormData
}

const emptyDepartment: Schema.DepartmentsFormData = {
	name: '',
	location_id: undefined,
	notes: '',
}

const DepartmentForm = ({ to, method = 'post', onSubmit, department = emptyDepartment }: DepartmentFormProps) => {

	return (
		<Form
			model="department"
			data={ { department } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="name" label="Name" required />
				</Grid.Col>

				<Grid.Col>
					<FormLocationsDropdown initialData={ coerceArray(department?.location) } />
				</Grid.Col>

				<Grid.Col>
					<Textarea name="notes" label="Notes" />
				</Grid.Col>

				<Grid.Col>
					<Submit>
						{ department.id ? 'Update' : 'Create' } Department
					</Submit>
				</Grid.Col>

			</Grid>
		</Form>
	)
}

export default DepartmentForm
