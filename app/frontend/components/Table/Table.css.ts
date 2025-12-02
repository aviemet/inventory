import { rem } from "@mantine/core"
import { css } from "@linaria/core"

import { vars, theme } from "@/lib/theme"

export const table = css`
	width: 100%;

	&.layout-fixed {
		table-layout: fixed;
	}

	&.layout-auto {
		table-layout: auto;
	}


	th, td {
		padding: ${ rem(6) };

		.mantine-Button-root {
			padding: ${ vars.spacing.xxs };
		}

		&.table-column-fit {
			width: 1px;
			white-space: nowrap;
		}

		&.nowrap {
			white-space: nowrap;
		}
	}

	/* On small screens, collapse tables into "cards" */
	@media(max-width: ${ vars.breakpoints.sm }) {
		thead {
			display: none;
		}

		/* Only for tables with a thead */
		thead + tbody {
			tr {
				display: flex;
				flex-direction: column;
				margin-bottom: 10px;
				background-color: ${ vars.colors.dark[7] };
				border-radius: ${ rem(4) };
				padding: ${ rem(6) };
				border-bottom: 1px solid ${ vars.colors.primaryColors.filled };
			}

			td {
				display: grid;
				grid-template-columns: 8rem 1fr;

				&::before {
					content: attr(data-cell);
				}

				&.table-row-select-checkbox {
					visibility: collapse;
				}
			}
		}
	}
`

export const wrapper = css`
	overflow: auto;
	position: relative;
	height: 100%;
	max-height: 100%;

	& .${ table } thead {
		top: -10px;
	}
`
