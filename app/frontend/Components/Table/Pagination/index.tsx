import React from 'react'
import { useTableContext } from '../TableContext'
import { Group, Pagination, useMantineTheme } from '@mantine/core'
import PageItem from './PageItem'

const PaginationComponent = () => {
	const { tableState: { pagination } } = useTableContext()
	const theme = useMantineTheme()

	if(!pagination) return <></>

	const {
		count,
		pages,
		limit,
		current_page,
		next_page,
		prev_page,
		is_first_page,
		is_last_page,
	} = pagination

	const recordStart = ((current_page - 1) * limit) + 1
	const recordEnd = Math.min(current_page * limit, count)

	return (
		<Group position="apart" mt="auto" pt={ 8 }>
			<div>
        Showing <b>{ recordStart } - { recordEnd } / { count }</b>
			</div>

			<Pagination
				total={ pages }
				page={ current_page }
				itemComponent={ props => <PageItem total={ pages } { ...props } /> }
				color={ theme.primaryColor }
				sx={ theme => ({
					a: {
						color: theme.other.colorSchemeOption(theme.black, theme.white),

						'&:hover': {
							textDecoration: 'none',
						},
					},
				}) }
			/>
		</Group>
	)
}

export default PaginationComponent
