import React from 'react'
import { createStyles, Table, type TableProps } from '@mantine/core'
import cx from 'clsx'

const useTableStyles = (fixed: boolean) => createStyles(theme => ({
	wrapper: {
		overflow: 'auto',
		position: 'relative',
		maxHeight: '100%',
		borderTop: `1px solid ${theme.other.colorSchemeOption(theme.colors.gray[2], theme.colors.gray[9])}`
	},

	table: {
		tableLayout: fixed ? 'fixed' : 'auto',
		border: theme.other.colorSchemeOption(`1px solid ${theme.colors.gray[2]}`, `1px solid ${theme.colors.gray[9]}`),
		borderTop: 0,
		marginBottom: '0 !important',
		width: '100%',

		thead: {
			boxShadow: theme.shadows.xs,
			position: 'sticky',
			top: 0,
			zIndex: 1,
			backgroundColor: theme.other.colorSchemeOption(theme.white, theme.colors.gray[9]),
		},

		'tbody, tbody a': {
			fontSize: '0.9rem',
		},

		'tbody tr td': {
			borderColor: theme.other.colorSchemeOption(theme.colors.gray[2], theme.colors.gray[9]),
		},

		'th, td': {
			width: 1,

			'&.table-column-fit': {
				width: 1,
				whiteSpace: 'nowrap',
			},
		},

		'th': {
			'&.sortable': {
				position: 'relative',
				paddingRight: '1rem',
				whiteSpace: 'nowrap',

				a: {
					color: theme.other.colorSchemeOption(theme.black, theme.white),
				},

				'&:before, &:after': {
					position: 'absolute',
					display: 'block',
					right: 0,
					width: 0,
					height: 0,
					content: '""',
					borderColor: theme.colors.gray[4],
					borderStyle: 'solid',
					borderLeft: `${theme.other.table.sortButtonHeight}px solid transparent !important`,
					borderRight: `${theme.other.table.sortButtonHeight}px solid transparent !important`,
				},

				'&:before': {
					borderTop: 0,
					top: `calc(50% - (${theme.other.table.sortButtonHeight}px + 2px))`,
					borderBottomWidth: `${theme.other.table.sortButtonWidth}px`,
				},

				'&:after': {
					borderBottom: 0,
					bottom: `calc(50% - (${theme.other.table.sortButtonHeight}px + 2px))`,
					borderTopWidth: `${theme.other.table.sortButtonWidth}px`,
				},

				'&.asc:before, &.desc:after': {
					borderColor: theme.colors.gray[7],
				},
			},
		},
	},
}))()

interface ITableProps extends TableProps {
	fixed?: boolean
}

const TableComponent = ({ children, className, fixed = false, ...props }: ITableProps) => {
	const { classes } = useTableStyles(fixed)

	return (
		<div className={ classes.wrapper }>
			<Table striped highlightOnHover className={ cx(className, classes.table) } { ...props }>
				{ children }
			</Table>
		</div>
	)
}

export default TableComponent
