import { createColumnHelper } from "@tanstack/react-table"

import { Badge, Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { CheckIcon, CrossIcon } from "@/components/Icons"
import { TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.PeopleIndex>()

export const peopleColumns = [
	columnHelper.accessor("first_name", {
		header: "First Name",
		enableSorting: true,
		meta: {
			model: "first_name",
			hideable: false,
		},
	}),
	columnHelper.accessor("last_name", {
		header: "Last Name",
		enableSorting: true,
		meta: {
			model: "last_name",
			hideable: "last_name",
		},
	}),
	columnHelper.accessor("employee_number", {
		header: "Emp. #",
		enableSorting: true,
		meta: {
			model: "employee_number",
			hideable: "employee_number",
		},
	}),
	columnHelper.accessor("job_title", {
		header: "Title",
		enableSorting: true,
		meta: {
			model: "job_title",
			hideable: "job_title",
		},
	}),
	columnHelper.accessor(row => row.manager?.name, {
		id: "manager",
		header: "Manager",
		enableSorting: true,
		meta: {
			model: "manager.name",
			hideable: "manager",
		},
	}),
	columnHelper.accessor(row => row.department?.name, {
		id: "department",
		header: "Department",
		enableSorting: true,
		meta: {
			model: "department.name",
			hideable: "department",
		},
	}),
	columnHelper.accessor(row => row.items?.length, {
		id: "items",
		header: "Items",
		enableSorting: true,
		meta: {
			model: "items.count",
			hideable: "items",
		},
	}),
	columnHelper.accessor(row => row.accessories?.length, {
		id: "accessories",
		header: "Accessories",
		enableSorting: true,
		meta: {
			model: "accessories.count",
			hideable: "accessories",
		},
	}),
	columnHelper.display({
		id: "groups",
		header: "Groups",
		enableSorting: false,
		meta: {
			hideable: "groups",
		},
	}),
	columnHelper.display({
		id: "login_enabled",
		header: "Login Enabled",
		enableSorting: false,
		meta: {
			hideable: "login_enabled",
		},
	}),
	columnHelper.display({
		id: "actions",
		header: "Actions",
		enableSorting: false,
		meta: {
			hideable: false,
		},
	}),
]

const PeopleTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="first_name" />
					<Table.HeadCell columnId="last_name" />
					<Table.HeadCell columnId="employee_number" />
					<Table.HeadCell columnId="job_title" />
					<Table.HeadCell columnId="manager" />
					<Table.HeadCell columnId="department" />
					<Table.HeadCell columnId="items" />
					<Table.HeadCell columnId="accessories" />
					<Table.HeadCell columnId="groups" />
					<Table.HeadCell columnId="login_enabled" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (person: Schema.PeopleIndex) => (
					<Table.Row key={ person.id }>
						<Table.Cell columnId="first_name" nowrap>
							<Link href={ Routes.person(person) }>{ person.first_name }</Link>
						</Table.Cell>

						<Table.Cell columnId="last_name">
							<Link href={ Routes.person(person) }>{ person.last_name }</Link>
						</Table.Cell>

						<Table.Cell columnId="employee_number">
							<Link href={ Routes.person(person) }>{ person.employee_number }</Link>
						</Table.Cell>

						<Table.Cell columnId="job_title">
							<Link href={ Routes.person(person) }>{ person.job_title }</Link>
						</Table.Cell>

						<Table.Cell columnId="manager">
							{ person?.manager?.id && <Link href={ Routes.person(person.manager.id) }>
								{ person.manager.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="department">
							{ person.department && <Link href={ Routes.department(person.department.slug) }>
								{ person.department?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="items">
							{ person.items && <Link href={ Routes.items() }>{ person.items.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="accessories">
							{ person.accessories && <Link href={ Routes.accessories() }>{ person.accessories.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="groups">
							{ person.groups?.map(group => <Badge key={ group.id }>{ group.name }</Badge>) }
						</Table.Cell>

						<Table.Cell columnId="login_enabled">
							{ person.user && person.user.active ? <CheckIcon /> : <CrossIcon /> }
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editPerson(person) } label={ person.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default PeopleTable
