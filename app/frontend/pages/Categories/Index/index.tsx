import { NewIcon } from "@/components/Icons"
import CategoriesTable, { categoriesColumns } from "@/domains/Categories/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

interface CategoriesIndexProps {
	categories: Schema.CategoriesIndex[]
	pagination: Schema.Pagination
}

const CategoriesIndex = ({ categories, pagination }: CategoriesIndexProps) => {
	return (
		<IndexPageTemplate
			title="Categories"
			model="categories"
			rows={ categories }
			columns={ categoriesColumns }
			pagination={ pagination }
			deleteRoute={ Routes.categories() }
			menuOptions={ [
				{ label: "New Category", href: Routes.newCategory(), icon: <NewIcon /> },
			] }
		>
			<CategoriesTable records={ categories } pagination={ pagination } model="categories" />
		</IndexPageTemplate>
	)
}

export default CategoriesIndex
