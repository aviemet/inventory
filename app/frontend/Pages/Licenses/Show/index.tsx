import React from 'react'
import { Section, Menu, Flex, Heading, Tabs, Page } from '@/Components'
import Details from './Details'
import ItemHistory from './ItemHistory'
import Associations from './Associations'
import { Routes } from '@/lib'

interface IShowLicenseProps {
	license: Schema.License
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const ShowLicense = ({ license }: IShowLicenseProps) => {
	const title = license.name ?? 'License Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Licenses', href: Routes.licenses() },
			{ title: license.name! },
		] }>
			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

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
				</Flex>

				<Tabs urlControlled={ true } defaultValue={ tabs.details }>
					<Tabs.List>
						<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
						<Tabs.Tab value={ tabs.history }>History</Tabs.Tab>
						<Tabs.Tab value={ tabs.associations }>Associations</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value="details">
						<Details license={ license } />
					</Tabs.Panel>

					<Tabs.Panel value="history">
						<ItemHistory license={ license } />
					</Tabs.Panel>

					<Tabs.Panel value="associations">
						<Associations license={ license } />
					</Tabs.Panel>

				</Tabs>

			</Section>

		</Page>
	)
}

export default ShowLicense
