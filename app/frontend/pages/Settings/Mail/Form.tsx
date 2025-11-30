import { omit } from "lodash"
import React from "react"

import { Group, Grid } from "@/components"
import { TestResponseButton } from "@/components/Button"
import { Form, type FormProps, PasswordInput, SegmentedControl, RichText, Submit, TextInput, FormConsumer } from "@/components/Form"
import { Routes, isUnset } from "@/lib"

type SmtpFormData = {
	smtp: Schema.SmtpsFormData
}

export interface SmtpFormProps extends FormProps<SmtpFormData> {
	data: SmtpFormData
}

const requiredFields = ["smtp.host", "smtp.port", "smtp.domain", "smtp.username", "smtp.password"]

const SmtpForm = ({ method = "post", ...props }: SmtpFormProps) => {
	return (
		<Form
			model="smtp"
			method={ method }
			{ ...props }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="name" label="Name" required />
				</Grid.Col>

				<Grid.Col span={ { sm: 12, md: 8 } }>
					<TextInput name="host" label="SMTP Server Address" required />
				</Grid.Col>

				<Grid.Col span={ { sm: 12, md: 4 } }>
					<TextInput name="port" label="Port Number" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="domain" label="Email Domain" required
						placeholder="e.g. mycompany.com"
					/>
				</Grid.Col>

				<Grid.Col>
					<TextInput name="username" label="Username" required />
				</Grid.Col>

				<Grid.Col>
					<PasswordInput name="password" label="Password" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="address" label="Reply-To Address"
						placeholder="If not provided, will default to your username"
					/>
				</Grid.Col>

				<Grid.Col>
					<SegmentedControl name="security" label="Security" options={ [
						{ label: "None", value: "basic" },
						{ label: "TLS", value: "tls" },
						{ label: "SSL", value: "ssl" },
					] } />
				</Grid.Col>

				<Grid.Col>
					<Group pt="md" pb="xs" justify="right">
						<FormConsumer<SmtpFormData>>{ ({ data, getData }) => (
							<TestResponseButton
								method="post"
								endpoint={ Routes.apiSmtpTest() }
								data={ { smtp: omit(data.smtp, "id") } }
								disabled={ requiredFields.some(field => isUnset(getData(field))) }
							/>
						) }</FormConsumer>
					</Group>
				</Grid.Col>

				<Grid.Col>
					<RichText name="notes" label="Notes" />
				</Grid.Col>

				<Grid.Col>
					<Submit requiredFields={ requiredFields }>
						Save SMT Settings
					</Submit>
				</Grid.Col>

			</Grid>
		</Form>
	)
}

export default SmtpForm
