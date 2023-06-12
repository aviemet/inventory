import React from 'react'
import { formatter } from '@/lib'

interface IDateProps {
	children: string|Date
	format?: keyof typeof formatter.date
}

const Date = ({ children, format = 'short' }: IDateProps) => {
	return (
		<>{ formatter.date[format](children) }</>
	)
}

export default Date
