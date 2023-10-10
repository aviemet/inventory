import { vars, style } from '@/lib/theme'

export const menuItem = style({
	'&.disabled *': {
		// color: vars.colors.gray[vars.fn.primaryShade()],
		textDecoration: 'line-through',

		'& input[type=checkbox], & input[type=checkbox]:checked': {
			// backgroundColor: vars.colors.gray[vars.fn.primaryShade()],
		},
	},
})
