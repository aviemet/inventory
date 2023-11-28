import { vars } from '@/lib/theme'
import { css } from '@linaria/core'

export const row = css`
	height: 40;

	&:hover .item-ip-assign-button, & .item-ip-assign-button.editing {
		color: ${vars.colors.gray[4]};
	}
`
