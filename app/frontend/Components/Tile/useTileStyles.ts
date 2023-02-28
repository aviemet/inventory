import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
	tile: {
		borderColor: theme.fn.primaryColor(),
		borderTopWidth: 2,
		boxShadow: theme.shadows.md,
		width: '100%',
		maxWidth: '24rem',
	},

	footer: {
		display: 'flex',
		borderBottomRightRadius: 8,
		borderBottomLeftRadius: 8,
		backgroundColor: theme.other.colorSchemeOption(
			theme.fn.lighten(theme.fn.primaryColor(), 0.75),
			theme.fn.darken(theme.fn.primaryColor(), 0.75),
		),

		'& > *': {
			padding: '12px 24px !important',
		},
	},

	link: {
		flex: 1,
		textAlign: 'center',
		transitionProperty: 'all',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '500ms',
		borderTopWidth: '1px',

		'&:hover': {
			backgroundColor: theme.other.colorSchemeOption(
				theme.colors[theme.primaryColor][2],
				theme.colors[theme.primaryColor][6],
			),
		},
	},
}))
