import { Box, type BoxProps, type ElementProps } from "@mantine/core"
import cx from "clsx"
import React from "react"

import * as classes from "./Tile.css"

interface TileFooterProps extends BoxProps, ElementProps<"footer", keyof BoxProps> {}

const Footer = ({ children, className, ...props }: TileFooterProps) => {
	return (
		<Box
			component="footer"
			className={ cx(classes.footer, className) }
			{ ...props }
		>
			{ children }
		</Box>
	)
}

export default Footer
