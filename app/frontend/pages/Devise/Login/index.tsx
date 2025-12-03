import React, { useRef } from "react"
import { type UseFormProps } from "use-inertia-form"

import { Title, Tile } from "@/components"
import { Form, Field, TextInput, PasswordInput, Checkbox, Submit } from "@/components/Form"
import { Routes } from "@/lib"
import { withLayout } from "@/lib/withLayout"

type LoginFormData = {
	user: {
		email: string
		password: string
		remember_me: boolean
	}
}

const defaultData = {
	user: {
		email: "",
		password: "",
		remember_me: false,
	},
}

const Login = () => {
	const emailInputRef = useRef<HTMLInputElement>(null)

	const handleSubmit = ({ data }: UseFormProps<LoginFormData>) => {
		if(data.user.email === "" || data.user.password === "") {
			emailInputRef.current!.focus()
			return false
		}
	}

	return (
		<Tile>
			<Form
				disableFormatting
				model="user"
				data={ defaultData }
				to={ Routes.newUserSession() }
				onSubmit={ handleSubmit }
			>
				<Tile.Content>

					<div>
						<Title>Inventory</Title>
					</div>

					<Field>
						<TextInput
							name="email"
							placeholder="Email"
							autoFocus
							autoComplete="Email"
							required
							pattern=".+@.+\..+"
						/>
					</Field>

					<Field>
						<PasswordInput
							name="password"
							placeholder="Password"
							autoComplete="current-password"
							required
						/>
					</Field>

					<Field>
						<Submit>Log In</Submit>
					</Field>

					<Field>
						<Checkbox name="remember_me" label="Remember Me" />
					</Field>

				</Tile.Content>

				<Tile.Footer>
					<Tile.HoverLink href={ Routes.newUserPassword() }>Reset Password</Tile.HoverLink>
					<Tile.HoverLink href={ Routes.newUserRegistration() }>Register</Tile.HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default withLayout(Login, "auth")
