
import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import ConsumableForm from "@/domains/Consumables/Form"

interface UpdateConsumableProps {
	consumable: Schema.ConsumablesEdit
}

const EditConsumable = ({ consumable }: UpdateConsumableProps) => {
	const title = `Edit ${consumable.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Consumables", href: Routes.consumables() },
			{ title: consumable.name, href: Routes.consumable(consumable) },
			{ title: "Edit Consumable", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<ConsumableForm
					to={ Routes.consumable(consumable) }
					method="patch"
					consumable={ consumable }
				/>
			</Section>
		</Page>
	)
}

export default EditConsumable
