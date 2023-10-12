import { type MantineTheme, createTheme } from '@mantine/core'
import { themeToVars } from '@mantine/vanilla-extract'
import breakpoints from './breakpoints.mjs'

const buildTheme = (primaryColor = 'violet') => createTheme({
	...breakpoints,
	black: '#111111',
	white: '#FCFCFC',
	fontFamily: 'Roboto, sans-serif',
	fontFamilyMonospace: 'Monaco, Courier, monospace',
	primaryColor: primaryColor,
	defaultRadius: 'xs',
	headings: {
		fontFamily: 'Greycliff CF, Roboto, sans-serif',
	},
	fontSizes: {
		xs: '0.75rem',
		sm: '0.9rem',
		md: '1rem',
		lg: '1.2rem',
		xl: '1.4rem',
	},
	shadows: {
		xs: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
		sm: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
		md: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
		lg: '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
		xl: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
	},
	spacing: {
		xxl: 'calc(2.5rem * var(--mantine-scale))',
		xxs: 'calc(0.5rem * var(--mantine-scale))',
	},
	components: {
		Autocomplete: {
			styles: {
				input: {
					height: 'unset',
				},
			},
		},
	},
	other: {
		header: {
			height: 50,
		},
		navbar: {
			width: {
				closed: 50,
				open: 200,
			},
		},
		footer: {
			height: 35,
		},
		form: {
			label: {
				width: '12rem',
			},
		},
		table: {
			sortButtonHeight: 5,
			sortButtonWidth: 6,
		},
		colors: {
			replenishButtonColor: 'yellow',
			checkoutButtonColor: 'pink',
			checkinButtonColor: 'cyan',
		},
	},
})

export const theme: MantineTheme = buildTheme() as MantineTheme

const vars = themeToVars(theme)

// Add primary colors array to theme object
// vars.colors.primaryColors = vars.colors[vars.colors.primary]

export { vars }
export { style } from '@vanilla-extract/css'
