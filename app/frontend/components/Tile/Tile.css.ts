import { css } from "@linaria/core"

import { vars } from "@/lib/theme"

export const tile = css`
	// border-color: vars.fn.primaryColor(),
	border-top-width: 2;
	box-shadow: ${ vars.shadows.md };
	width: 100%;
	max-width: 24rem;
`

export const footer = css`
	display: flex;
	border-bottom-right-radius: 8;
	border-bottom-left-radius: 8;
	// background-color: vars.other.colorSchemeOption(
	// 	vars.fn.lighten(vars.fn.primaryColor(); 0.75);
	// 	vars.fn.darken(vars.fn.primaryColor(); 0.75);
	// )

	& > * {
		padding: 12px 24px !important;
	}
`

export const link = css`
	flex: 1;
	text-align: center;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 500ms;
	border-top-width: 1px;

	&:hover {
		// background-color: vars.other.colorSchemeOption(
		// 	vars.colors[vars.primaryColor][2];
		// 	vars.colors[vars.primaryColor][6];
		// )
	}
`
