import React from 'react'
import { Section, Menu, Group, Title, Tabs, Page } from '@/Components'
import Details from './Details'
import ItemHistory from './ItemHistory'
import Associations from './Associations'
import { Routes } from '@/lib'

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

export interface ShowLicenseProps {
	license: Schema.LicensesShow
}

const ShowLicense = ({ license }: ShowLicenseProps) => {
	const title = license.name ?? 'License Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Licenses', href: Routes.licenses() },
			{ title: license.name, href: window.location.href },
		] }>
			<Section>
				<Group justify="space-between">
					<Title>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							{ (license?.qty || 0) > (license?.assignments?.length || 0) &&
								<Menu.Link href={ Routes.checkoutLicense(license) }>
									Checkout License
								</Menu.Link>
							}
							<Menu.Link href={ Routes.editLicense(license) }>
								Edit License
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Tabs urlControlled={ true } defaultValue={ tabs.details }>
					<Tabs.List>
						<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
						<Tabs.Tab value={ tabs.history }>History</Tabs.Tab>
						<Tabs.Tab value={ tabs.associations }>Associations</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value={ tabs.details }>
						<Details license={ license } />
					</Tabs.Panel>

					<Tabs.Panel value={ tabs.history }>
						<ItemHistory license={ license } />
					</Tabs.Panel>

					<Tabs.Panel value={ tabs.associations }>
						<Associations license={ license } />
					</Tabs.Panel>

				</Tabs>

			</Section>

		</Page>
	)
}

export default ShowLicense
