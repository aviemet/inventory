import { vars } from '@/lib/theme'
import { css } from '@linaria/core'
import backgroundImageUrl from '@/images/robots-bw.svg'

export const page = css`
	 // 'soft-light' 'multiply'
	${vars.lightSelector} {
		background-blend-mode: lighten;
	}
	${vars.darkSelector} {
		background-blend-mode: lighten;
		/* background-blend-mode: soft-light; */
	}
	background-image: ${backgroundImageUrl ? `url("${backgroundImageUrl}")` : ''};
	background-color: ${vars.colors.primary};
	min-height: 100vh;
`

export const wrapper = css`
	min-height: 100vh;
	width: 100%;
	display: grid;
	gap: 0px;
	grid-template-rows: 1fr 35px;
	grid-template-areas: "content" "footer";

	#content {
		grid-area: content;
		height: 100%;
	}
	#footer {
		grid-area: footer;
	}
`

export const content = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`
