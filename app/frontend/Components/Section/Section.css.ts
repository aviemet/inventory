import { vars, style } from '@/lib/theme'

export const section = style({
	[vars.lightSelector]: {
		backgroundColor: vars.colors.white,
	},
	[vars.darkSelector]: {
		backgroundColor: vars.colors.gray[9],
	},
	boxShadow: vars.shadows.xs,
	padding: '1rem 0.75rem',
	borderTop: `2px solid ${vars.colors.primary}`,

	'& + &': {
		marginTop: 10,
	},
})
