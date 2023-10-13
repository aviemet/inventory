import { vars, style, theme } from '@/lib/theme'
import { darken } from '@mantine/core'

export const topbar = style({
	transition: 'left 100ms ease-in-out',
	[vars.lightSelector]: {
		backgroundColor: vars.colors[theme.primaryColor][9],
	},
	[vars.darkSelector]: {
		backgroundColor: darken(vars.colors[theme.primaryColor][9], 0.75),
	},
	color: vars.colors.white,

	[`@media (min-width: ${vars.breakpoints.sm})`]: {
		left: theme.other.navbar.width.open,

		'&.closed': {
			left: theme.other.navbar.width.closed,
		},
	},
})

export const wrapper = style({
	display: 'flex',
	alignItems: 'center',
	height: '100%',
})
