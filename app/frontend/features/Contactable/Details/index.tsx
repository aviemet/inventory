import Address from "./Address"
import Email from "./Email"
import Phone from "./Phone"
import Website from "./Website"

interface ContactDetailsProps {
	contact: Schema.ContactsFormData
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
