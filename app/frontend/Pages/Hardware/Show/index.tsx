import React from 'react'
import { Section, Menu, Flex, Heading, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { EditIcon, CheckinIcon, CheckoutIcon } from '@/Components/Icons'
import Details from './Details'
import HardwareHistory from './HardwareHistory'
import Associations from './Associations'

interface IShowHardwareProps {
	hardware: Schema.Hardware
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const ShowHardware = ({ hardware }: IShowHardwareProps) => {
	const title = hardware.name ?? 'Hardware Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.hardwares() },
			{ title: hardware.name! },
		] }>
			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							{ hardware.assigned ?
								<Menu.Hardware href={ Routes.checkinHardware(hardware) } icon={ <CheckinIcon /> }>
								Checkin Hardware
								</Menu.Hardware>
								:
								<Menu.Hardware href={ Routes.checkoutHardware(hardware) } icon={ <CheckoutIcon /> }>
								Checkout Hardware
								</Menu.Hardware>
							}
							<Menu.Hardware href={ Routes.editHardware(hardware) } icon={ <EditIcon /> }>
								Edit Hardware
							</Menu.Hardware>
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
						<Details hardware={ hardware } />
					</Tabs.Panel>

					<Tabs.Panel value="history">
						<HardwareHistory hardware={ hardware } />
					</Tabs.Panel>

					<Tabs.Panel value="associations">
						<Associations hardware={ hardware } />
					</Tabs.Panel>
				</Tabs>

			</Section>
		</Page>
	)
}

export default ShowHardware
