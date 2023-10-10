import { vars, style } from '@/lib/theme'

// const navbarWidth = vars.other.navbar.width
const iconWidth = 48
const borderWidth = 2
// const navItemWidth = navbarWidth.open + iconWidth
// const openSpanWidth = navbarWidth.open - iconWidth - borderWidth
// const bgColor = vars.other.colorSchemeOption(vars.fn.lighten(vars.colors.gray[1], 0.25), vars.colors.dark[6])
const navItemHeight = 44

export const root = style({
	[`@media (min-width: ${vars.breakpoints.sm})`]: {
		top: 0,
		// height: `calc(100% - ${vars.other.footer.height}px)`,
	},

	transition: 'width 100ms ease-in-out, min-width 100ms ease-in-out',

	'&.closed': {
		'.links > ul > li': {
			'&:hover': {
				// width: navItemWidth,
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
			left: iconWidth,

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
			// borderLeftColor: vars.colors[vars.primaryColor],
		},

		'&:hover': {
			// borderLeftColor: vars.colors[vars.primaryColor],
			boxShadow: vars.shadows.lg,

			'&, ul': {
				// backgroundColor: bgColor,
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
		// width: `${navbarWidth.open - borderWidth}px`,
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
		left: iconWidth,
		// width: `${openSpanWidth}px`,
		display: 'flex',
		height: '100%',
		alignItems: 'center',
	},
})

