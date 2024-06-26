import React from 'react'
import { Box, type BoxProps, type ElementProps } from '@mantine/core'

interface TileContentProps extends BoxProps, ElementProps<'div', keyof BoxProps> {}

const Content = ({ children, ...props }: TileContentProps) => {
	return (
		<Box px={ 24 } pt={ 24 } pb={ 4 } { ...props }>
			{ children }
		</Box>
	)
}

export default Content
