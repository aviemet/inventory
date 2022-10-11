import { breadcrumbLinks, Routes } from '@/lib'

export const availableToCheckout = (accessory: Schema.Accessory) => {
	if(accessory.qty === null || accessory.qty === undefined || accessory.assignments === undefined) return false

	return accessory.qty - accessory.assignments.reduce((sum, assignment) => sum += assignment.active ? 1 : 0, 0) > 0
}

export const breadcrumbs = {
	checkin: (accessory: Schema.Accessory) => breadcrumbLinks([
		{ title: 'Accessories', href: Routes.accessories() },
		{ title: accessory.name!, href: Routes.accessory(accessory) },
		{ title: 'Check In' },
	]),

	checkout: (accessory: Schema.Accessory) => breadcrumbLinks([
		{ title: 'Accessories', href: Routes.accessories() },
		{ title: accessory.name!, href: Routes.accessory(accessory) },
		{ title: 'Check Out' },
	]),

	edit: (accessory: Schema.Accessory) => breadcrumbLinks([
		{ title: 'Accessories', href: Routes.accessories() },
		{ title: accessory.name!, href: Routes.accessory(accessory) },
		{ title: 'Edit Accessory' },
	]),

	new: () => breadcrumbLinks([
		{ title: 'Accessories', href: Routes.accessories() },
		{ title: 'New Accessory' },
	]),

	show: (accessory: Schema.Accessory) => breadcrumbLinks([
		{ title: 'Accessories', href: Routes.accessories() },
		{ title: accessory.name! },
	]),
}
