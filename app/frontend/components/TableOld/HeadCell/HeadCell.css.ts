import { css } from "@linaria/core"

import { vars, theme } from "@/lib/theme"

export const th = css`
	&.sortable {
		position: relative;
		padding-right: 1rem;
		white-space: nowrap;

		a {
			${ vars.lightSelector } {
				color: ${ vars.colors.black };
			}
			${ vars.darkSelector } {
				color: ${ vars.colors.white };
			}
		}

		&:before {
			content: "";
			position: absolute;
			right: 0.25rem;
			width: 0;
			height: 0;
			border-left: ${ theme.other.table.sortButtonWidth }px solid transparent;
			border-right: ${ theme.other.table.sortButtonWidth }px solid transparent;
			border-top: 0;
			border-bottom: ${ theme.other.table.sortButtonHeight }px solid transparent;
			top: calc(50% - (${ theme.other.table.sortButtonHeight }px + 2px));
		}

		&:after {
			content: "";
			position: absolute;
			right: 0.25rem;
			width: 0;
			height: 0;
			border-left: ${ theme.other.table.sortButtonWidth }px solid transparent;
			border-right: ${ theme.other.table.sortButtonWidth }px solid transparent;
			border-bottom: 0;
			border-top: ${ theme.other.table.sortButtonHeight }px solid transparent;
			bottom: calc(50% - (${ theme.other.table.sortButtonHeight }px + 2px));
		}

		&.asc:before {
			border-bottom-color: ${ vars.colors.gray[7] };
		}

		&.desc:after {
			border-top-color: ${ vars.colors.gray[7] };
		}
	}
`
