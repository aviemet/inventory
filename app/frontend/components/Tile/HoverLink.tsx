import clsx from "clsx"

import { Link } from "@/components"
import { type LinkProps } from "@/components/Link"

import * as classes from "./Tile.css"

export function TileHoverLink({ children, className, ...props }: LinkProps) {
	return (
		<Link className={ clsx(classes.link, className) } { ...props }>{ children }</Link>
	)
}
