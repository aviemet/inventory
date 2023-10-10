import { vars, style } from '@/lib/theme'
import backgroundImageUrl from '@/images/robots-bw.svg'

export const page = style({
	// backgroundBlendMode: vars.other.colorSchemeOption('lighten', 'soft-light'), // 'soft-light' 'multiply'
	backgroundImage: backgroundImageUrl ? `url("${backgroundImageUrl}")` : '',
	// backgroundColor: vars.colors[vars.primaryColor][6],
	minHeight: '100vh',
})


export const wrapper = style({
	minHeight: '100vh',
	width: '100%',
	display: 'grid',
	gap: '0px',
	gridTemplateRows: '1fr 35px',
	gridTemplateAreas: '"content" "footer"',

	'#content': {
		gridArea: 'content',
		height: '100%',
	},
	'#footer': {
		gridArea: 'footer',
	},
})

export const content = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100%',
})
