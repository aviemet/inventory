import { vars } from '@/lib/theme'
import { css } from '@linaria/core'

export const table = css`
	max-width: ${vars.breakpoints.md};
`

export const firstCell = css`
	font-weight: 'bold';
	text-align: 'right';
	width: '1px';
`
