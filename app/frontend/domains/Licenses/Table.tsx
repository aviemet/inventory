import { Group, Link, Money, Table } from "@/components"
import { CheckoutButton, EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes, formatter } from "@/lib"

const LicensesTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="qty" sort="qty">Seats</Table.HeadCell>
					<Table.HeadCell columnId="licenser_name" sort="licenser_name">Licensed To Name</Table.HeadCell>
					<Table.HeadCell columnId="licenser_email" sort="licenser_email">Licensed To Email</Table.HeadCell>
					<Table.HeadCell columnId="reassignable" sort="reassignable">Reassignable</Table.HeadCell>
					<Table.HeadCell columnId="cost" sort="cost_cents">Cost</Table.HeadCell>
					<Table.HeadCell columnId="purchased_at" sort="purchased_at">Purchase Date</Table.HeadCell>
					<Table.HeadCell columnId="expires_at" sort="expires_at">Expire Date</Table.HeadCell>
					<Table.HeadCell columnId="terminates_at" sort="terminates_at">Termination Date</Table.HeadCell>
					<Table.HeadCell columnId="maintained" sort="maintained">Maintained</Table.HeadCell>
					<Table.HeadCell columnId="category" sort="category.name">Category</Table.HeadCell>
					<Table.HeadCell columnId="vendor" sort="vendors.name">Vendor</Table.HeadCell>
					<Table.HeadCell columnId="manufacturer" sort="manufacturers.name">Manufacturer</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (license: Schema.LicensesIndex) => (
					<Table.Row key={ license.id }>

						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.license(license) }>{ license.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="qty">
							<Link href={ Routes.license(license) }>{ license.qty }</Link>
						</Table.Cell>

						<Table.Cell columnId="licenser_name">
							<Link href={ Routes.license(license) }>{ license.licenser_name }</Link>
						</Table.Cell>

						<Table.Cell columnId="licenser_email">
							<Link href={ Routes.license(license) }>{ license.licenser_email }</Link>
						</Table.Cell>

						<Table.Cell columnId="reassignable">
							<Link href={ Routes.license(license) }>{ license.reassignable }</Link>
						</Table.Cell>

						<Table.Cell columnId="cost">
							<Money>{ license.cost }</Money>
						</Table.Cell>

						<Table.Cell columnId="purchased_at">{ license.purchased_at && formatter.date.short(license.purchased_at) }</Table.Cell>

						<Table.Cell columnId="expires_at">{ license.expires_at && formatter.date.short(license.expires_at) }</Table.Cell>

						<Table.Cell columnId="terminates_at">{ license.terminates_at && formatter.date.short(license.terminates_at) }</Table.Cell>

						<Table.Cell columnId="maintained">{ license.maintained }</Table.Cell>

						<Table.Cell columnId="category">
							<Link href={ Routes.license(license) }>{ license.category?.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="vendor">
							<Link href={ Routes.license(license) }>{ license.vendor?.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="manufacturer">
							<Link href={ Routes.license(license) }>{ license.manufacturer?.name }</Link>
						</Table.Cell>


						<Table.Cell columnId="actions" fitContent>
							<Group wrap="nowrap" gap="sm">
								{ license.qty_available && <CheckoutButton
									href={ Routes.checkoutLicense(license) }
									disabled={ license.qty_available < 1 }
									tooltipMessage={ license.qty_available < 1 && "There are none to checkout" }
									label={ license.name }
								/> }
								<EditButton href={ Routes.editLicense(license) } />
							</Group>
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default LicensesTable
