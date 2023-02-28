import { createStyles } from '@mantine/core'

export default createStyles(theme => ({
	pagination: {
		a: {
			color: theme.other.colorSchemeOption(theme.black, theme.white),

			'&:hover': {
				textDecoration: 'none',
			},
		} },
}))
