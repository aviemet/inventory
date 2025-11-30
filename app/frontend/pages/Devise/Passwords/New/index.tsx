
import { Title, Tile } from "@/components"
import { Field, Form, TextInput, Submit } from "@/components/Form"
import { Routes } from "@/lib"

type PasswordsNewFormData = {
	email: string
}

const PasswordsNew = () => {
	const defaultData: PasswordsNewFormData = {
		email: "",
	}

	return (
		<Tile>
			<Form
				disableFormatting
				model="user"
				data={ defaultData }
				to={ Routes.newUserPassword() }
			>
				<Tile.Content>
					<div>
						<Title>Reset Password</Title>
					</div>

					<Field>
						<TextInput name="email" placeholder="Email" autoComplete="Email" />
					</Field>

					<Field>
						<Submit>Send Reset Instructions</Submit>
					</Field>

				</Tile.Content>

				<Tile.Footer>
					<Tile.HoverLink href={ Routes.newUserSession() }>Log In</Tile.HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default PasswordsNew
