import React, { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Breadcrumbs as MantineBreadcrumbs, type BreadcrumbsProps, Group } from '@mantine/core'

const Breadcrumbs = ({ separator = '>', ...props }: BreadcrumbsProps) => {
	const [footerElement, setFooterElement] = useState<HTMLElement>()

	useLayoutEffect(() => {
		if(footerElement) return

		const node = document.getElementById('footer-portal')
		if(node) {
			setFooterElement(node)
		}
	}, [footerElement])

	if(!footerElement) return

	return createPortal(
		<Group position="right" sx={ { marginBottom: 6 } }>
			<MantineBreadcrumbs separator={ separator } { ...props } />
		</Group>,
		footerElement
	)
}

export default Breadcrumbs
