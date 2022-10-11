import { breadcrumbLinks, Routes } from '@/lib'

export const availableToCheckout = (consumable: Schema.Consumable) => {
	if(consumable.qty === null || consumable.qty === undefined || consumable.assignments === undefined) return false

	return consumable.qty > 0
}

export const breadcrumbs = {
	checkin: (consumable: Schema.Consumable) => breadcrumbLinks([
		{ title: 'Consumables', href: Routes.consumables() },
		{ title: consumable.name!, href: Routes.consumable(consumable) },
		{ title: 'Check In' },
	]),

	checkout: (consumable: Schema.Consumable) => breadcrumbLinks([
		{ title: 'Consumables', href: Routes.consumables() },
		{ title: consumable.name!, href: Routes.consumable(consumable) },
		{ title: 'Check Out' },
	]),

	edit: (consumable: Schema.Consumable) => breadcrumbLinks([
		{ title: 'Consumables', href: Routes.consumables() },
		{ title: consumable.name!, href: Routes.consumable(consumable) },
		{ title: 'Edit Consumable' },
	]),

	new: () => breadcrumbLinks([
		{ title: 'Consumables', href: Routes.consumables() },
		{ title: 'New Consumable' },
	]),

	show: (consumable: Schema.Consumable) => breadcrumbLinks([
		{ title: 'Consumables', href: Routes.consumables() },
		{ title: consumable.name! },
	]),
}
