import React from 'react'
import { Button } from '@mantine/core'

interface ITestResponseButtonProps {
	children?: string
	endpoint: string
	data: any
}

const TestResponseButton = ({ children = 'Test', endpoint, data }: ITestResponseButtonProps) => {
	return (
		<Button>{ children }</Button>
	)
}

export default TestResponseButton
