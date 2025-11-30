import React from "react"
import { type HTTPVerb, type UseFormProps } from "use-inertia-form"

import { Grid } from "@/components"
import {
	Form,
	TextInput,
	Submit,
	PasswordInput,
} from "@/components/Form"
import { FormDepartmentsDropdown, FormPeopleDropdown } from "@/features/Dropdowns"

type UserFormData = {
	user: Schema.UsersFormData
}

export interface UserFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<UserFormData>) => boolean | void
	user: Schema.UsersFormData
}

const UserForm = ({ to, method = "post", onSubmit, user }: UserFormProps) => {
	/**
	 * Manage password check validation
	 */
	const handleFormChange = ({ getData, clearErrors }: UseFormProps<UserFormData>) => {
		const password = getData("user.")
		const checkPassword = getData("user.check_password")

		if(password === checkPassword) {
			clearErrors("user.check_password")
			return
		}
	}

	const handlePasswordBlur = (password: string, { getData, setError }: UseFormProps<UserFormData>) => {
		const checkPassword = getData("user.check_password")

		if(checkPassword !== "" && password !== checkPassword) {
			setError("user.check_password", "Passwords must match")
		}
	}

	const handleCheckPasswordBlur = (checkPassword: string, { getData, setError }: UseFormProps<UserFormData>) => {
		const password = getData("user.password")

		if(password !== checkPassword) {
			setError("user.check_password", "Passwords must match")
		}
	}
	return (
		<Form
			model="user"
			data={ { user } }
			to={ to }
			method={ method }
			onChange={ handleFormChange }
			onSubmit={ onSubmit }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="email" label="Username/Email" required />
				</Grid.Col>

				<Grid.Col>
					<PasswordInput
						name="password"
						label="New Password"
						onBlur={ handlePasswordBlur }
						clearErrorsOnChange={ false }
					/>
				</Grid.Col>

				<Grid.Col>
					<PasswordInput
						name="password_confirmation"
						label="Check Password"
						onBlur={ handleCheckPasswordBlur }
						clearErrorsOnChange={ false }
					/>
				</Grid.Col>

				<Grid.Col>
					<Submit>
						{ user.id ? "Update" : "Create" } User
					</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default UserForm
