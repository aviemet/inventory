import { vars, theme } from '@/lib/theme'
import { darken } from '@mantine/core'
import { css } from '@linaria/core'

export const topbar = css`
	transition: left 100ms ease-in-out;
	${vars.lightSelector} {
		background-color: ${vars.colors[theme.primaryColor][9]};
	}
	${vars.darkSelector} {
		background-color: ${darken(vars.colors[theme.primaryColor][9], 0.75)};
	}
	color: ${vars.colors.white};

	@media (min-width: ${vars.breakpoints.sm}) {
		left: ${theme.other.navbar.width.open};

		&.closed {
			left: ${theme.other.navbar.width.closed};
		}
	}
`

export const wrapper = css`
	display: flex;
	align-items: center;
	height: 100%;
`
