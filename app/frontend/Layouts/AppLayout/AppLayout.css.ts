import { vars, theme } from '@/lib/theme'
import { css } from '@linaria/core'

export const wrapper = css`
	overflow: auto;
	height: calc(100vh - ${theme.other.header.height}px - ${theme.other.footer.height}px);
`
