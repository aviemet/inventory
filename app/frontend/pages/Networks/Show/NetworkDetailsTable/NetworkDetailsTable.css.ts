import { css } from "@linaria/core"

import { vars } from "@/lib/theme"

export const table = css`
	width: 100%;
	flex: 1;

	thead.mantine-Table-thead {
		top: -10px;
	}
`

export const row = css`
	height: 46px;

	&:hover .item-ip-assign-button, & .item-ip-assign-button.editing {
		color: ${ vars.colors.gray[4] };
	}

	td {
		vertical-align: middle;
	}
`
