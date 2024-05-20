import React from 'react'
import Address from './Address'
import Phone from './Phone'
import Email from './Email'
import Website from './Website'

interface ContactDetailsProps {
	contact: Schema.Contact
}

const ContactDetails = ({ contact }: ContactDetailsProps) => {
	return (
		<>
			<div>
				{ contact.addresses && contact.addresses.map(address => (
					<Address key={ address.id } address={ address } />
				)) }
			</div>

			<div>
				{ contact.phones && contact.phones.map(phone => (
					<Phone key={ phone.id } phone={ phone } />
				)) }
			</div>

			<div>
				{ contact.emails && contact.emails.map(email => (
					<Email key={ email.id } email={ email } />
				)) }
			</div>

			<div>
				{ contact.websites && contact.websites.map(website => (
					<Website key={ website.id } website={ website } />
				)) }
			</div>
		</>
	)
}

export default ContactDetails
