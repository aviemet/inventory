import { vars, style, theme } from '@/lib/theme'

export const wrapper = style({
	overflow: 'auto',
	height: `calc(100vh - ${theme.other.header.height}px - ${theme.other.footer.height}px)`,
})
