import React from 'react'
import { Accordion, Grid } from '@/Components'
import { FieldsFor } from '@/Components/Form'
import Address from './Address'
import Phone from './Phone'
import Email from './Email'
import Website from './Website'

const ContactableForm = () => {
	return (
		<FieldsFor model="contact" legend="Contact Details">

			<Accordion chevronPosition="left" style={ { width: '100%' } }>

				<Accordion.Item value="phones">
					<Accordion.Control>Phone Numbers</Accordion.Control>
					<Accordion.Panel>
						<Grid.Col>
							<Phone />
						</Grid.Col>
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item value="emails">
					<Accordion.Control>Email Addresses</Accordion.Control>
					<Accordion.Panel>
						<Grid.Col>
							<Email />
						</Grid.Col>
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item value="addresses">
					<Accordion.Control>Addresses</Accordion.Control>
					<Accordion.Panel>
						<Grid.Col>
							<Address />
						</Grid.Col>
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item value="websites">
					<Accordion.Control>Websites</Accordion.Control>
					<Accordion.Panel>
						<Grid.Col>
							<Website />
						</Grid.Col>
					</Accordion.Panel>
				</Accordion.Item>

			</Accordion>

		</FieldsFor>
	)
}

export default ContactableForm
