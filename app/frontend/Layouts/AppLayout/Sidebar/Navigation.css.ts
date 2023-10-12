import { vars, style, theme } from '@/lib/theme'

const navbarWidth = theme.other.navbar.width
const iconWidth = 48
const borderWidth = 2
const navItemWidth = navbarWidth.open! + iconWidth
const openSpanWidth = navbarWidth.open! - iconWidth - borderWidth
const navItemHeight = 44

export const root = style({
	// vars.largerThan('sm')
	[`@media (min-width: ${vars.breakpoints.sm})`]: {
		top: 0,
		height: `calc(100% - ${theme.other?.footer?.height || 0}px)`,
	},

	transition: 'width 100ms ease-in-out, min-width 100ms ease-in-out',

	'&.closed': {
		'.links > ul > li': {
			'&:hover': {
				width: `${navItemWidth}px`,
			},

			'& > a > span': {
				width: `calc(100% - ${iconWidth}px)`,
			},
		},

		'span, ul ul': {
			display: 'none',
		},

		'ul > li > ul': {
			top: '100%',
			left: `${iconWidth}px`,

			'&.up': {
				top: 'unset',
				bottom: '100%',
			},
		},
	},

	'.links > ul > li:hover': {
		width: '100%',

		'& > ul': {
			display: 'block',
		},

		// 'a:hover:after': {
		// 	content: '""',
		// 	position: 'absolute',
		// 	top: 0,
		// 	bottom: 0,
		// 	left: 0,
		// 	right: 0,
		// 	boxShadow: vars.shadows.md,
		// },
	},

	'ul li': {
		position: 'relative',
		borderLeftWidth: `${borderWidth}px`,
		borderStyle: 'solid',
		borderLeftColor: 'transparent',

		'&.active': {
			borderLeftColor: vars.colors.primary,
		},

		'&:hover': {
			borderLeftColor: vars.colors.primary,
			boxShadow: vars.shadows.lg,

			'&, ul': {
				[vars.lightSelector]: {
					backgroundColor: vars.colors.gray[1],
				},
				[vars.darkSelector]: {
					backgroundColor: vars.colors.dark[6],
				},
			},

			'span, ul': {
				display: 'flex',
			},
		},
	},

	'ul > li > ul': {
		position: 'absolute',
		display: 'none',
		flexDirection: 'column',
		width: `${navbarWidth.open! - borderWidth}px`,
		left: '100%',
		top: 0,

		'&:after': {
			content: '""',
			width: '100%',
			height: `calc(100% + ${navItemHeight}px)`,
			display: 'block',
			position: 'absolute',
			top: `-${navItemHeight}px`,
			boxShadow: vars.shadows.xs,
			zIndex: -1,
		},

		'&.up': {
			top: 'unset',
			bottom: `-${navItemHeight}px`,

			'&:after': {
				top: 'unset',
				bottom: `-${navItemHeight}px`,
			},
		},

		span: {
			width: `calc(100% - ${iconWidth + borderWidth}px)`,
		},
	},

	span: {
		position: 'absolute',
		top: 0,
		left: `${iconWidth}px`,
		width: `${openSpanWidth}px`,
		display: 'flex',
		height: '100%',
		alignItems: 'center',
	},
})

