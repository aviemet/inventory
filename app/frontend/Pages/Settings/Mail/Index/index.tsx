import React from 'react'
import SettingsLayout from '../../SettingsLayout'
import { Heading } from '@/Components'
import Empty from './Empty'
import SmtpList from './SmtpList'

interface IMailSettingsProps {
	smtps: Schema.Smtp[]
}

const Mail = ({ smtps }: IMailSettingsProps) => {
	return (
		<SettingsLayout>
			<Heading mb={ 24 }>Mail Settings</Heading>

			{ smtps.length === 0 ? <Empty /> : <SmtpList smtps={ smtps } /> }
		</SettingsLayout>
	)
}

export default Mail
