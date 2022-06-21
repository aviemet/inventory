import { createStyles } from '@mantine/core'

export default createStyles(theme => ({
	root: {
		transition: 'width 100ms ease-in-out, min-width 100ms ease-in-out',

		'&.closed': {
			'span, ul ul': {
				display: 'none',
			},

			'ul > li > ul': {
				top: '100%',
				left: 48,

				'&.up': {
					top: 'unset',
					bottom: '100%',
				},
			},
		},

		'.links > ul > li:hover': {
			width: 185,

			'& > ul': {
				display: 'block',
				boxShadow: theme.shadows.xs,
			}
		},

		'ul li': {
			position: 'relative',
			borderLeft: '2px solid transparent',

			'&:hover': {
				background: theme.other.colorSchemeOption(theme.colors.gray[1], theme.colors.dark[6]),
				borderLeft: `2px solid ${theme.primaryColor}`,

				'span, & ul': {
					display: 'flex',
					background: theme.other.colorSchemeOption(theme.colors.gray[1], theme.colors.dark[6]),
				},
			},
		},

		'ul > li > ul': {
			display: 'none',
			flexDirection: 'column',
			width: '100%',
			left: 'calc(100% + 48px)',
			top: 0,

			'&.up': {
				top: 'unset',
				bottom: 0,
			},

			span: {
				width: 'calc(100% - 48px)',
			}
		},

		'span, ul > li > ul': {
			position: 'absolute',
			width: '100%',
		},

		span: {
			display: 'flex',
			height: '100%',
			alignItems: 'center',
			top: 0,
			left: 48,
		},
	}
}))
