
import { Title, Tile } from "@/components"
import { Form, TextInput, Submit } from "@/components/Form"
import { Routes } from "@/lib"

interface ConfirmationsNewProps {
	user: Schema.User
}

const ConfirmationsNew = ({ user }: ConfirmationsNewProps) => {
	return (
		<Tile>
			<Form
				disableFormatting
				model="user"
				data={ { user } }
				to={ Routes.userConfirmation() }
			>
				<Tile.Content>
					<div>
						<Title order={ 3 }>Please check your email</Title>
						<p>You will receive an email within the next couple minutes. Please follow the link to confirm your account.</p>
						<p>If you don&apos;t receive an email, use the form below to resend it.</p>
					</div>

					<div>
						<TextInput name="email" placeholder="Email" autoComplete="Email" required />
					</div>

					<div>
						<Submit className="large">Resend confirmation instructions</Submit>
					</div>

				</Tile.Content>

				<Tile.Footer>
					<Tile.HoverLink href={ Routes.newUserRegistration() }>Register</Tile.HoverLink>
					<Tile.HoverLink href={ Routes.newUserSession() }>Log In Instead</Tile.HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default ConfirmationsNew
