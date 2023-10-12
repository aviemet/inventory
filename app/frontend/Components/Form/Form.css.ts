import { vars, style, theme } from '@/lib/theme'
import { darken, lighten } from '@mantine/core'

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
					gridTemplateColumns: `${theme.other.form.label.width} 1fr`,
					gridTemplateRows: '1fr',
					borderLeftWidth: '2px',
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
		[vars.lightSelector]: {
			backgroundColor: vars.colors.gray[1],
		},
		[vars.darkSelector]: {
			backgroundColor: vars.colors.dark[7],
		},
		width: '100%',
		borderColor: vars.colors.primaryColor,
		borderTopWidth: '2px',
		marginTop: vars.spacing.xs,

		'&.required': {
			borderColor: vars.colors.primary, // vars.colors[vars.primaryColor][8],
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
					maxWidth: theme.other.form.label.width,
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
	[vars.lightSelector]: {
		borderTop: `2px solid ${vars.colors.white}`,
		backgroundColor: darken(vars.colors.white, fieldsetAlphaAdjustment),
	},
	[vars.darkSelector]: {
		borderTop: `2px solid ${vars.colors.black}`,
		backgroundColor: lighten(vars.colors.black, fieldsetAlphaAdjustment),
	},

	'&:has(legend)': {
		marginTop: '2rem',
	},

	legend: {
		position: 'absolute',
		top: '-1.75rem',
		display: 'inline-block',
		[vars.lightSelector]: {
			color: vars.colors.black,
		},
		[vars.darkSelector]: {
			color: vars.colors.white,
		},
	},

	'.field': {
		flex: 1,
	},
})
