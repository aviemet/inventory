import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
	form: {
		maxWidth: `${theme.breakpoints.md}px`,

		'form.format-grid .field': {
			[`@media (min-width: ${theme.breakpoints.sm}px)`]: {
				'&:not(.textarea)': {
					display: 'grid',
					gridTemplateColumns: `${theme.other.form.label.width} 1fr`,
					gridTemplateRows: '1fr',
				},
			},
		},

		'.field': {
			backgroundColor: theme.other.colorSchemeOption(theme.colors.gray[1], theme.colors.dark[7]),
			marginBottom: theme.spacing.md,
			width: '100%',
			borderColor: theme.colors[theme.primaryColor][2],
			borderTopWidth: 2,

			'&.required': {
				borderColor: theme.colors[theme.primaryColor][8],
			},

			'&.field_with_errors': {
				borderColor: theme.colors.red[6],
			},

			label: {
				padding: '0.5rem 0.75rem',

				'&.text': {
					textAlign: 'left',
					width: '100%',
					borderTopLeftRadius: theme.spacing.xs,
					borderTopRightRadius: theme.spacing.xs,

					'& + textarea': {
						borderTopLeftRadius: 0,
						borderTopRightRadius: 0,
					},
				},
			},

			// On Desktop use a 2 column grid to show labels and inputs, with feedback elements below input
			[`@media (min-width: ${theme.breakpoints.sm}px)`]: {
				'&:not(.textarea)': {
					borderTopWidth: 0,
					borderLeftWidth: 2,
				},

				'& > label, & > legend': {
					flex: '1 1 0%',
					textAlign: 'right',
					maxWidth: theme.other.form.label.width,
					gridRowStart: 'span 2',
				},
			},
		},
	},

}))
