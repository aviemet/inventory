import React from 'react'
import { useTableContext } from '../TableContext'
import { Group, Pagination, useMantineTheme, packSx, type PaginationProps, Select } from '@mantine/core'
import PageItem from './PageItem'

interface IPaginationComponent extends Omit<PaginationProps, 'total'> {}

const PaginationComponent = ({ sx, boundaries = 2, siblings = 2, ...props }: IPaginationComponent) => {
	const { tableState: { pagination } } = useTableContext()
	const theme = useMantineTheme()

	if(!pagination) return <></>

	const {
		count,
		pages,
		limit,
		current_page,
		// next_page,
		// prev_page,
		// is_first_page,
		// is_last_page,
	} = pagination

	const recordStart = ((current_page - 1) * limit) + 1
	const recordEnd = Math.min(current_page * limit, count)

	return (
		<Group position="apart" mt="auto" pt={ 8 }>
			{ /* <Select data={ [
				{ value: '10', label: '10' },
				{ value: '25', label: '25' },
				{ value: '50', label: '50' },
				{ value: '100', label: '100' },
			] } /> */ }
			<div>
        Showing <b>{ recordStart } - { recordEnd } / { count }</b>
			</div>

			<Pagination
				total={ pages }
				page={ current_page || 1 }
				itemComponent={ itemProps => <PageItem total={ pages } { ...itemProps } /> }
				color={ theme.primaryColor }
				siblings={ siblings }
				boundaries={ boundaries }
				sx={ [{
					a: {
						color: theme.other.colorSchemeOption(theme.black, theme.white),

						'&:hover': {
							textDecoration: 'none',
						},
					},
				}, ...packSx(sx)] }
				{ ...props }
			/>
		</Group>
	)
}

export default PaginationComponent
