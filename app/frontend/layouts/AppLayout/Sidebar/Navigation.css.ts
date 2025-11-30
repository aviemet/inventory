import { css } from "@linaria/core"

import { vars, theme } from "@/lib/theme"

const navbarWidth = theme.other.navbar.width
const iconWidth = 48
const borderWidth = 2
const navItemWidth = navbarWidth.open! + iconWidth
const openSpanWidth = navbarWidth.open! - iconWidth - borderWidth
const navItemHeight = 44

export const links = css`
	@media (min-width: ${ vars.breakpoints.sm }) {
		&:last-child {
			margin-top: auto;
		}
	}
`

export const closed = css``

export const active = css`
	border-left-color: ${ vars.colors.primaryColors.filled };
`

export const navbar = css`
	transition: width 100ms ease-in-out, min-width 100ms ease-in-out;
	overflow-y: clip;
	
	ul li {
		/* position: relative; */
		border-left-width: ${ borderWidth }px;
		border-style: solid;
		border-left-color: transparent;

		&.${ active } {
			border-left-color: ${ vars.colors.primaryColors.filled };
		}

		&:hover {
			border-left-color: ${ vars.colors.primaryColors.filled };
			box-shadow: ${ vars.shadows.lg };

			&, ul {
				${ vars.lightSelector } {
					background-color: ${ vars.colors.gray[1] };
				}
				${ vars.darkSelector } {
					background-color: ${ vars.colors.dark[6] };
				}
			}
		}
	}

	// Desktop only
	@media (min-width: ${ vars.breakpoints.sm }) {
		top: 0;
		height: calc(100% - ${ theme.other?.footer?.height || 0 }px);

		&.${ closed } {
			.${ links } > ul > li {
				&:hover {
					width: ${ navItemWidth }px;
				}

				& > a > span.link-text {
					width: calc(100% - ${ iconWidth }px);
				}
			}

			span.link-text, ul ul {
				display: none;
			}

			ul > li > ul {
				top: 100%;
				left: ${ iconWidth }px;

				&.up {
					top: unset;
					bottom: 100%;
				}
			}
		}

		.${ links } > ul > li:hover {
			width: 100%;

			& > ul {
				display: block;
			}
		}

		ul > li {
			&:hover span.link-text, ul {
				display: flex;
			}

			& > ul {
				position: absolute;
				display: none;
				flex-direction: column;
				width: ${ navbarWidth.open! - borderWidth }px;
				left: 100%;
				top: 0;

				&:after {
					content: "";
					width: 100%;
					height: calc(100% + ${ navItemHeight }px);
					display: block;
					position: absolute;
					top: -${ navItemHeight }px;
					box-shadow: ${ vars.shadows.xs };
					z-index: -1;
				}

				&.up {
					top: unset;
					bottom: -${ navItemHeight }px;

					&:after {
						top: unset;
						bottom: -${ navItemHeight }px;
					}
				}
			}

			span.link-text {
				width: calc(100% - ${ iconWidth + borderWidth }px);
			}
		}

		span.link-text {
			position: absolute;
			top: 0;
			left: ${ iconWidth }px;
			width: ${ openSpanWidth }px;
			display: flex;
			height: 100%;
			align-items: center;
		}

		ul li {
			position: relative;
			border-left-width: ${ borderWidth }px;
			border-style: solid;
			border-left-color: transparent;

			&.${ active } {
				border-left-color: ${ vars.colors.primaryColors.filled };
			}

			&:hover {
				border-left-color: ${ vars.colors.primaryColors.filled };
				box-shadow: ${ vars.shadows.lg };

				&, ul {
					${ vars.lightSelector } {
						background-color: ${ vars.colors.gray[1] };
					}
					${ vars.darkSelector } {
						background-color: ${ vars.colors.dark[6] };
					}
				}
			}
		}
	}

	// Mobile only
	@media (max-width: ${ vars.breakpoints.sm }) {
		overflow-y: auto;

		.${ links } > ul > li {
			span.link-text {
				display: inline-block;
				position: relative;
				height: unset;
			}

			& > ul {
				display: block;
				position: relative;
				left: unset;
			}
		}
	}
`
