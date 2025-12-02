import { rem } from "@mantine/core"
import { css } from "@linaria/core"

import { vars, theme } from "@/lib/theme"

export const thead = css`
	thead {
		box-shadow: ${ vars.shadows.xs };
		position: sticky;
		top: 0;
		z-index: 1;

		${ vars.lightSelector } {
			background-color: ${ vars.colors.gray[1] };

			th:hover {
				background-color: ${ vars.colors.gray[1] };
			}
		}
		${ vars.darkSelector } {
			background-color: ${ vars.colors.dark[7] };
		}
	}
`
