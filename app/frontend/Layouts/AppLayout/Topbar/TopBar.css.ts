import { vars, style } from '@/lib/theme'

export const topbar = style({
	transition: 'left 100ms ease-in-out',
	// backgroundColor: vars.other.colorSchemeOption(
	// vars.colors[vars.primaryColor][9],
	// vars.fn.darken(vars.colors[vars.primaryColor][9], 0.75),
	// ),
	// color: vars.white,

	[`@media (min-width: ${vars.breakpoints.sm})`]: {
		// left: vars.other.navbar.width.open,

		'&.closed': {
			// left: vars.other.navbar.width.closed,
		},
	},
})

export const wrapper = style({
	display: 'flex',
	alignItems: 'center',
	height: '100%',
})
