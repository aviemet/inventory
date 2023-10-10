import { vars, style } from '@/lib/theme'

const fieldsetAlphaAdjustment = 0.125

export const form = style({
	maxWidth: `${vars.breakpoints.md}`,

	'form.format-grid': {
		'.field': {
			[`@media (min-width: ${vars.breakpoints.sm})`]: {
				'&:not(.textarea, .compact)': {
					'&:not(.no-grid)': {
						display: 'grid',
					},
					// gridTemplateColumns: `${vars.other.form.label.width} 1fr`,
					gridTemplateRows: '1fr',
					borderLeftWidth: 2,
				},
			},

			'&:not(.checkbox)':{
				label: {
					padding: '0.5rem 0.75rem',
				},
			},
		},
	},

	'.field': {
		// backgroundColor: vars.other.colorSchemeOption(vars.colors.gray[1], vars.colors.dark[7]),
		width: '100%',
		// borderColor: vars.colors[vars.primaryColor][2],
		borderTopWidth: 2,
		marginTop: vars.spacing.xs,

		'&.required': {
			// borderColor: vars.colors[vars.primaryColor][8],
		},

		'&.field_with_errors': {
			borderColor: vars.colors.red[6],
		},

		' & > label': {
			display: 'block',

			'&.text': {
				textAlign: 'left',
				width: '100%',
				borderTopLeftRadius: vars.spacing.xs,
				borderTopRightRadius: vars.spacing.xs,

				'& + textarea': {
					borderTopLeftRadius: 0,
					borderTopRightRadius: 0,
				},
			},
		},

		// On Desktop use a 2 column grid to show labels and inputs, with feedback elements below input
		[`@media (min-width: ${vars.breakpoints.sm})`]: {
			'&:not(.textarea, .compact)': {
				borderTopWidth: 0,
				borderLeftWidth: 0,

				'& > label, & > legend': {
					flex: '1 1 0%',
					textAlign: 'right',
					// maxWidth: vars.other.form.label.width,
					gridRowStart: 'span 2',
				},
			},
		},
	},

	'button[type=submit]': {
		marginTop: vars.spacing.xs,
	},

})

export const fieldset = style({
	marginTop: vars.spacing.xs,
	padding: 10,
	position: 'relative',
	// backgroundColor: vars.other.colorSchemeOption(
	// 	vars.fn.darken(vars.white, fieldsetAlphaAdjustment),
	// 	vars.fn.lighten(vars.black, fieldsetAlphaAdjustment),
	// ),
	// borderTop: `2px solid ${vars.other.colorSchemeOption(vars.white, vars.black)}`,

	'&:has(legend)': {
		marginTop: '2rem',
	},

	legend: {
		position: 'absolute',
		top: '-1.75rem',
		display: 'inline-block',
		// color: vars.other.colorSchemeOption(vars.black, vars.white),
	},

	'.field': {
		flex: 1,
	},
})
