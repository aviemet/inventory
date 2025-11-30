
import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import ItemForm from "@/domains/Items/Form"

interface NewItemProps {
	item: Schema.ItemsFormData
}

const NewItem = ({ item }: NewItemProps) => {
	const title = "New Hardware Asset"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Hardware", href: Routes.items() },
			{ title: "New Hardware", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>
				<ItemForm to={ Routes.items() } item={ item } />
			</Section>
		</Page>
	)
}

export default NewItem
