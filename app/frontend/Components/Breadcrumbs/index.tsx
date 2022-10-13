import React, { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Breadcrumbs as MantineBreadcrumbs, type BreadcrumbsProps, Group } from '@mantine/core'
import { Link } from '@/Components'

export type TBreadcrumb = {
	title: string
	href?: string
}

export const breadcrumbLinks = (links: TBreadcrumb[]) => links.map((link, i) => link.href ?
	<Link href={ link.href } key={ i }>{ link.title }</Link>
	:
	<React.Fragment key={ i }>{ link.title }</React.Fragment>
)

interface IBreadcrumbsProps extends Omit<BreadcrumbsProps, 'children'> {
	crumbs?: TBreadcrumb[]
	children?: React.ReactNode
}

const Breadcrumbs = ({ crumbs, children, separator = '>', ...props }: IBreadcrumbsProps) => {
	const [footerElement, setFooterElement] = useState<HTMLElement>()

	useLayoutEffect(() => {
		if(footerElement) return

		const node = document.getElementById('footer-portal')
		if(node) {
			setFooterElement(node)
		}
	}, [footerElement])

	return <>{ footerElement && createPortal(
		<Group position="right" sx={ { marginBottom: 6 } }>
			<MantineBreadcrumbs separator={ separator } { ...props }>
				{ crumbs && breadcrumbLinks(crumbs) }
				{ children && children }
			</MantineBreadcrumbs>
		</Group>,
		footerElement
	) }</>
}

export default Breadcrumbs
