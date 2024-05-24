import { vars } from '@/lib/theme'
import { css } from '@linaria/core'

export const table = css`
	width: 100%;
	flex: 1;

	thead.mantine-Table-thead {
		top: -10px;
	}
`

export const row = css`
	height: 40;

	&:hover .item-ip-assign-button, & .item-ip-assign-button.editing {
		color: ${vars.colors.gray[4]};
	}
`
