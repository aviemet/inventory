import { vars, style } from '@/lib/theme'

export const section = style({
	// backgroundColor: vars.other.colorSchemeOption(vars.white, vars.colors.gray[9]),
	boxShadow: vars.shadows.xs,
	padding: '1rem 0.75rem',
	// // borderTop: `2px solid ${vars.other.colorSchemeOption(vars.colors[vars.primaryColor][2], vars.colors[vars.primaryColor][9])}`,

	'& + &': {
		marginTop: 10,
	},
})
