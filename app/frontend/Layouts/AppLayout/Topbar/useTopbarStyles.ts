import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
	topbar: {
		transition: 'left 100ms ease-in-out',
		backgroundColor: theme.other.colorSchemeOption(
			theme.colors[theme.primaryColor][9],
			theme.fn.darken(theme.colors[theme.primaryColor][9], 0.75),
		),
		color: theme.white,

		[`@media (min-width: ${theme.breakpoints.sm}px)`]: {
			left: theme.other.navbar.width.open,

			'&.closed': {
				left: theme.other.navbar.width.closed,
			},
		},
	},

	wrapper: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
	},
}))
