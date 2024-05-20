import React from 'react'
import { formatter } from '@/lib'

interface DateProps {
	children: string|Date
	format?: keyof typeof formatter.date
}

const Date = ({ children, format = 'short' }: DateProps) => {
	return (
		<>{ formatter.date[format](children) }</>
	)
}

export default Date
