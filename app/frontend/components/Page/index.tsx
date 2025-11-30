import { Head } from "@inertiajs/react"
import React from "react"

import Breadcrumbs, { type Breadcrumb } from "@/components/Breadcrumbs"

interface PageProps {
	children?: React.ReactNode
	title?: string
	meta?: React.ReactNode
	breadcrumbs?: Breadcrumb[]
}

const Page = ({ children, title, meta, breadcrumbs }: PageProps) => {
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
