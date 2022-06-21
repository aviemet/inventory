import { createStyles } from '@mantine/core'

export default createStyles(theme => {
	const navbarWidth = theme.other.navbar.width
	const iconWidth = 48
	const borderWidth = 2
	const navItemWidth = navbarWidth.open - iconWidth - borderWidth

	return {
		root: {
			transition: 'width 100ms ease-in-out, min-width 100ms ease-in-out',

			'&.closed': {
				'.links > ul > li > a > span': {
					width: `calc(100% + ${iconWidth}px)`,
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
				width: navItemWidth,

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
					background: theme.other.colorSchemeOption(theme.colors.gray[1], theme.colors.dark[6]),
					borderLeftColor: theme.primaryColor,

					'span, & ul': {
						display: 'flex',
						background: theme.other.colorSchemeOption(theme.colors.gray[1], theme.colors.dark[6]),
					},
				},
			},

			'ul > li > ul': {
				position: 'absolute',
				display: 'none',
				flexDirection: 'column',
				width: `calc(100% + ${iconWidth}px)`,
				left: `calc(100% + ${iconWidth}px)`,
				top: 0,

				'&.up': {
					top: 'unset',
					bottom: 0,
				},

				span: {
					width: `calc(100% - ${iconWidth}px)`,
				}
			},

			span: {
				position: 'absolute',
				top: 0,
				left: iconWidth,
				width: '100%',
				display: 'flex',
				height: '100%',
				alignItems: 'center',
			},
		}
	}
})
