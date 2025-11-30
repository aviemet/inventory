import { Box, type BoxProps, type ElementProps } from "@mantine/core"
import clsx from "clsx"

import * as classes from "./Tile.css"

interface TileFooterProps extends BoxProps, ElementProps<"footer", keyof BoxProps> {}

export function TileFooter({ children, className, ...props }: TileFooterProps) {
	return (
		<Box
			component="footer"
			className={ clsx(classes.footer, className) }
			{ ...props }
		>
			{ children }
		</Box>
	)
}
