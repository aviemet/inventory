import React from 'react'
import Breadcrumbs, { type TBreadcrumb } from '@/Components/Breadcrumbs'
import { Head } from '@inertiajs/inertia-react'

interface IPageProps {
	children?: React.ReactNode
	title?: string
	meta?: React.ReactNode
	breadcrumbs?: TBreadcrumb[]
}

const Page = ({ children, title, meta, breadcrumbs }: IPageProps) => {
	return (
		<>
			{ title && <Head title={ title }>
				{ meta && meta }
			</Head> }
			{ breadcrumbs && <Breadcrumbs crumbs={ breadcrumbs } /> }
			{ children }
		</>
	)
}

export default Page
