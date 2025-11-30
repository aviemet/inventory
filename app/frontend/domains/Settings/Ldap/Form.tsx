import { type FormProps, type HTTPVerb } from "use-inertia-form"

import { Grid } from "@/components"
import { Form, TextInput, Submit, PasswordInput } from "@/components/Form"

interface LdapFormProps extends Omit<FormProps<{ ldap: Schema.LdapsFormData }>, "data"> {
	ldap: Schema.LdapsFormData
	to: string
	method?: HTTPVerb
}

const LdapForm = ({ ldap, method = "post", ...props }: LdapFormProps) => {
	return (
		<Form
			model="ldap"
			data={ { ldap } }
			method={ method }
			{ ...props }
		>
			<Grid>
				<Grid.Col>
					<TextInput label="Name" name="name" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput label="Host" name="host" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput label="Port" name="port" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput label="Domain" name="domain" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput label="Username" name="username" required />
				</Grid.Col>

				<Grid.Col>
					<PasswordInput label="Password" name="password" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput label="Tree Base" name="tree_base" />
				</Grid.Col>

				<Grid.Col>
					<TextInput label="Search Path" name="user_search" />
				</Grid.Col>

				<Grid.Col>
					<TextInput label="Sync Interval" name="sync_interval" />
				</Grid.Col>

				<Grid.Col>
					<Submit>{ ldap.id ? "Update" : "Save" } LDAP Settings</Submit>
				</Grid.Col>

			</Grid>
		</Form>
	)
}

export default LdapForm
