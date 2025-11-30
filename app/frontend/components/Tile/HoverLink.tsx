import cx from "clsx"
import React from "react"

import { Link } from "@/components"
import { type LinkProps } from "@/components/Link"

import * as classes from "./Tile.css"

const HoverLink = ({ children, className, ...props }: LinkProps) => {
	return (
		<Link className={ cx(classes.link, className) } { ...props }>{ children }</Link>
	)
}

export default HoverLink
