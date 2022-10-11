import React from 'react'
import { Breadcrumbs as MantineBreadcrumbs, type BreadcrumbsProps, Group } from '@mantine/core'

const Breadcrumbs = ({ separator = '>', ...props }: BreadcrumbsProps) => {
	return (
		<Group position="right" sx={ { marginBottom: 6 } }>
			<MantineBreadcrumbs separator={ separator } { ...props } />
		</Group>
	)
}

export default Breadcrumbs
