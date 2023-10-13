import { vars, theme } from '@/lib/theme'
import { css } from '@linaria/core'

export const topbar = css`
	transition: left 100ms ease-in-out;
	background-color: ${vars.colors.primary};
	
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
