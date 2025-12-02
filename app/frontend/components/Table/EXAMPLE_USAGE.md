# Table Component Usage with TanStack Table

The Table component now uses TanStack Table's full feature set. You must define columns using TanStack Table's column definitions.

## Basic Example

```tsx
import { createColumnHelper } from "@tanstack/react-table"
import { Table } from "@/components"

const columnHelper = createColumnHelper<Schema.PeopleIndex>()

const columns = [
  columnHelper.accessor("first_name", {
    header: "First Name",
    enableSorting: true,
    meta: {
      model: "first_name", // Server-side sort key
      hideable: "first_name", // Key for column visibility preferences
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
  columnHelper.accessor(row => row.manager?.name, {
    id: "manager",
    header: "Manager",
    enableSorting: true,
    meta: {
      model: "manager.name", // Server-side sort key
      hideable: "manager",
    },
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    enableSorting: false,
    meta: {
      hideable: false, // Cannot be hidden
    },
    cell: (info) => <EditButton href={Routes.editPerson(info.row.original)} />,
  }),
]

function PeopleTable() {
  return (
    <Table.TableProvider
      columns={columns}
      data={people}
      pagination={pagination}
      model="people"
    >
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell columnId="first_name" />
            <Table.HeadCell columnId="last_name" />
            <Table.HeadCell columnId="manager" />
            <Table.HeadCell columnId="actions" />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.RowIterator
            render={(person) => (
              <Table.Row key={person.id}>
                <Table.Cell columnId="first_name">
                  <Link href={Routes.person(person)}>{person.first_name}</Link>
                </Table.Cell>
                <Table.Cell columnId="last_name">
                  <Link href={Routes.person(person)}>{person.last_name}</Link>
                </Table.Cell>
                <Table.Cell columnId="manager">
                  {person.manager && <Link href={Routes.person(person.manager.id)}>
                    {person.manager.name}
                  </Link>}
                </Table.Cell>
                <Table.Cell columnId="actions">
                  <EditButton href={Routes.editPerson(person)} />
                </Table.Cell>
              </Table.Row>
            )}
          />
        </Table.Body>
      </Table>
    </Table.TableProvider>
  )
}
```

## Key Changes

1. **Column Definitions Required**: `TableProvider` now requires a `columns` prop with TanStack Table column definitions
2. **Sorting**: Use `enableSorting: true` in column definitions. The `meta.model` property specifies the server-side sort key
3. **Column Visibility**: Controlled via TanStack Table's column visibility API. Set `meta.hideable` to control which columns can be hidden
4. **HeadCell**: Now only needs `columnId` - it automatically uses TanStack Table's sorting state and header rendering
5. **RowIterator**: Automatically uses TanStack Table's row model - no need to pass data

## Column Meta Properties

- `meta.model`: Server-side sort key (e.g., "first_name", "manager.name")
- `meta.hideable`: Key for column visibility preferences, or `false` to prevent hiding
