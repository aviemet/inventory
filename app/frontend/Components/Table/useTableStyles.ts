import { createStyles, rem } from '@mantine/core'

const useTableStyles = (fixed: boolean = true) => createStyles(theme => ({
	wrapper: {
		overflow: 'auto',
		position: 'relative',
		height: '100%',
		maxHeight: '100%',
		borderTop: `1px solid ${theme.other.colorSchemeOption(theme.colors.gray[2], theme.colors.gray[9])}`,
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
			backgroundColor: theme.other.colorSchemeOption(theme.white, theme.colors.dark[7]),

			th:{
				'&:hover': {
					backgroundColor: theme.fn.rgba(theme.other.colorSchemeOption(theme.colors.gray[1], theme.black), 0.4),
				},
			},
		},

		'thead, thead a, tbody, tbody a': {
			fontSize: '0.9rem',
		},

		'tbody tr td': {
			borderColor: theme.other.colorSchemeOption(theme.colors.gray[2], theme.colors.gray[9]),
		},

		'th, td': {
			'&.table-column-fit': {
				width: 1,
				whiteSpace: 'nowrap',
			},
		},

		'th': {
			'&.sortable': {
				position: 'relative',
				whiteSpace: 'nowrap',
				padding: 0,

				a: {
					display: 'block',
					width: '100%',
					height: '100%',
					color: theme.other.colorSchemeOption(theme.black, theme.white),
					padding: `${rem(7)} ${rem(10)}`,
				},

				'&:before, &:after': {
					position: 'absolute',
					display: 'block',
					right: '0.75rem',
					width: 0,
					height: 0,
					content: '""',
					cursor: 'pointer',
					borderColor: 'transparent', // theme.colors.gray[7],
					borderStyle: 'solid',
					borderLeft: `${theme.other.table.sortButtonHeight}px solid transparent !important`,
					borderRight: `${theme.other.table.sortButtonHeight}px solid transparent !important`,
					zIndex: '-1',

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
					borderColor: theme.colors.gray[4],
				},
			},

		},

		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			thead: {
				display: 'none',
			},
			tr:{
				display: 'flex',
				flexDirection: 'column',
			},
			td: {
				display: 'grid',
				gridTemplateColumns: '8rem 1fr',

				'&::before': {
					content: 'attr(data-cell)',
				},
			},
		},
	},

	section: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},

	searchWrapper: {
		display: 'flex',
		flex: 1,
	},

	searchInput: {
		flex: 1,
		input: {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
		},
	},
}))()

export default useTableStyles
