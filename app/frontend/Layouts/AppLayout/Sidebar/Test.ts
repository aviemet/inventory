import { css } from '@linaria/core'
import { vars, theme } from '@/lib/theme'

const navbarWidth = theme.other.navbar.width
const iconWidth = 48
const borderWidth = 2
const navItemWidth = navbarWidth.open! + iconWidth
const openSpanWidth = navbarWidth.open! - iconWidth - borderWidth
const navItemHeight = 44

export const links = css`
	&:last-child {
		margin-top: auto;
	}
`

export const closed = css``

export const active = css`
	border-left-color: ${vars.colors.primary}
`

export const navbar = css`
	transition: width 100ms ease-in-out, min-width 100ms ease-in-out;

	@media (min-width: ${vars.breakpoints.sm}) {
		top: 0;
		height: calc(100% - ${theme.other?.footer?.height || 0}px);
	}

	&.${closed} {
		.${links} > ul > li {
			&:hover {
				width: ${navItemWidth}px;
			}

			& > a > span {
				width: calc(100% - ${iconWidth}px);
			}
		}

		span, ul ul {
			display: none;
		}

		ul > li > ul {
			top: 100%;
			left: ${iconWidth}px;

			&.up {
				top: unset;
				bottom: 100%;
			}
		}
	}

	.${links} > ul > li:hover {
		width: 100%;

		& > ul {
			display: block;
		}
	}

	ul li {
		position: relative;
		border-left-width: ${borderWidth}px;
		border-style: solid;
		border-left-color: transparent;

		&.${active} {
			border-left-color: ${vars.colors.primary};
		}

		&:hover {
			border-left-color: ${vars.colors.primary};
			box-shadow: ${vars.shadows.lg};

			&, ul {
				${vars.lightSelector} {
					background-color: ${vars.colors.gray[1]};
				}
				${vars.darkSelector} {
					background-color: ${vars.colors.dark[6]};
				}
			}

			span, ul {
				display: flex;
			}
		}
	}

	ul > li > ul {
		position: absolute;
		display: none;
		flex-direction: column;
		width: ${navbarWidth.open! - borderWidth}px;
		left: 100%;
		top: 0;

		&:after {
			content: "";
			width: 100%;
			height: calc(100% + ${navItemHeight}px);
			display: block;
			position: absolute;
			top: -${navItemHeight}px;
			box-shadow: ${vars.shadows.xs};
			z-index: -1;
		}

		&.up {
			top: unset;
			bottom: -${navItemHeight}px;

			&:after {
				top: unset;
				bottom: -${navItemHeight}px;
			}
		}

		span {
			width: calc(100% - ${iconWidth + borderWidth}px);
		}
	}

	span {
		position: absolute;
		top: 0;
		left: ${iconWidth}px;
		width: ${openSpanWidth}px;
		display: flex;
		height: 100%;
		align-items: center;
	}
`
