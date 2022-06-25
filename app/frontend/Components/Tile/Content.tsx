import React from 'react'
import { Box } from '@mantine/core'

const Content = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box px={ 24 } pt={ 24 } pb={ 4 }>
			{ children }
		</Box>
	)
}

export default Content
