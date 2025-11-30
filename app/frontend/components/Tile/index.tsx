import { Paper, type PaperProps, type ElementProps } from "@mantine/core"
import clsx from "clsx"

import { TileContent as Content } from "./Content"
import { TileFooter as Footer } from "./Footer"
import { TileHoverLink as HoverLink } from "./HoverLink"
import * as classes from "./Tile.css"

interface TileProps extends PaperProps, ElementProps<"div", keyof PaperProps> {}

const TileBase = ({ children, className, ...props }: TileProps) => {
	return (
		<Paper radius="lg" className={ clsx(classes.tile, className) } { ...props }>
			{ children }
		</Paper>
	)
}

export const Tile = Object.assign(TileBase, {
	Content,
	Footer,
	HoverLink,
})
