import { css } from "@linaria/core"

import { vars } from "@/lib/theme"

export const table = css`
	max-width: ${ vars.breakpoints.md };
`

export const firstCell = css`
	font-weight: 'bold';
	text-align: 'right';
	width: '1px';
`
