import { vars, style } from '@/lib/theme'

export const tile = style({
	// borderColor: vars.fn.primaryColor(),
	borderTopWidth: 2,
	boxShadow: vars.shadows.md,
	width: '100%',
	maxWidth: '24rem',
})

export const footer = style({
	display: 'flex',
	borderBottomRightRadius: 8,
	borderBottomLeftRadius: 8,
	// backgroundColor: vars.other.colorSchemeOption(
	// 	vars.fn.lighten(vars.fn.primaryColor(), 0.75),
	// 	vars.fn.darken(vars.fn.primaryColor(), 0.75),
	// ),

	'& > *': {
		padding: '12px 24px !important',
	},
})

export const link = style({
	flex: 1,
	textAlign: 'center',
	transitionProperty: 'all',
	transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
	transitionDuration: '500ms',
	borderTopWidth: '1px',

	'&:hover': {
		// backgroundColor: vars.other.colorSchemeOption(
		// 	vars.colors[vars.primaryColor][2],
		// 	vars.colors[vars.primaryColor][6],
		// ),
	},
})
