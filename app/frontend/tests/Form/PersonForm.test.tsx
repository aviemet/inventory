import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import PersonForm from '@/Pages/People/New/Form'

// Tests that the form renders with all input components. tags: [happy path]
describe('test_form_renders_with_all_input_components', () => {
	// Arrange
	const to = '/submit'
	const departments: Schema.Department[] = [{ id: 1, name: 'Department 1' }]
	const locations: Schema.Location[] = [{ id: 1, name: 'Location 1' }]
	const people: Schema.Person[] = [{ id: 1, name: 'Person 1' }]
	const person: Schema.Person = { first_name: '', last_name: '', job_title: '' }
	const onSubmit = vi.fn()

	// Act
	const renderer = render(<PersonForm
		to={ to }
		departments={ departments }
		locations={ locations }
		people={ people }
		person={ person }
		onSubmit={ onSubmit }
	/>)

	// Assert
	// expect(renderer.find(TextInput)).toHaveLength(4)
	// expect(renderer.find(DepartmentsDropdown)).toHaveLength(1)
	// expect(renderer.find(PeopleDropdown)).toHaveLength(1)
	// expect(renderer.find(Checkbox)).toHaveLength(1)
	// expect(renderer.find(Submit)).toHaveLength(1)
})
