import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
	menuItem: {
		'& input[type=checkbox], & input[type=checkbox]:checked': {
			backgroundColor: theme.colors.gray[theme.fn.primaryShade()],
		},

		'&.disabled *': {
			color: theme.colors.gray[theme.fn.primaryShade()],
			textDecoration: 'line-through',
		},
	},
}))
