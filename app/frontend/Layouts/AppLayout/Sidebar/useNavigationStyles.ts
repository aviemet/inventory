import { createStyles } from '@mantine/core'

export default createStyles(theme => {
	const navbarWidth = theme.other.navbar.width
	const iconWidth = 48
	const borderWidth = 2
	const navItemWidth = navbarWidth.open + iconWidth
	const openSpanWidth = navbarWidth.open - iconWidth - borderWidth

	return {
		root: {
			[`@media (min-width: ${theme.breakpoints.sm}px)`]: {
				top: 0,
				height: `calc(100% - ${theme.other.footer.height}px)`,
			},

			transition: 'width 100ms ease-in-out, min-width 100ms ease-in-out',

			'&.closed': {
				'.links > ul > li': {
					'&:hover': {
						width: navItemWidth,
					},

					' & > a > span': {
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
					boxShadow: theme.shadows.xs,
				}
			},

			'ul li': {
				position: 'relative',
				borderLeftWidth: `${borderWidth}px`,
				borderStyle: 'solid',
				borderLeftColor: 'transparent',

				'&.active': {
					borderLeftColor: theme.colors[theme.primaryColor][theme.primaryShade.dark],
				},

				'&:hover': {
					borderLeftColor: theme.colors[theme.primaryColor][theme.primaryShade.light],
					boxShadow: theme.shadows.lg,

					'&, ul': {
						backgroundColor: theme.other.colorSchemeOption(theme.fn.lighten(theme.colors.gray[1], 0.25), theme.colors.dark[6]),
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
				width: `${navbarWidth.open - borderWidth}px`,
				left: '100%',
				top: 0,

				'&.up': {
					top: 'unset',
					bottom: 0,
				},

				span: {
					width: `calc(100% - ${iconWidth + borderWidth}px)`,
				}
			},

			span: {
				position: 'absolute',
				top: 0,
				left: iconWidth,
				// width: '100%',
				width: `${openSpanWidth}px`,
				display: 'flex',
				height: '100%',
				alignItems: 'center',
			},
		}
	}
})
