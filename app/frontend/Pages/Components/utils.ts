import { breadcrumbLinks, Routes } from '@/lib'

export const availableToCheckout = (component: Schema.Component) => {
	if(component.qty === null || component.qty === undefined || component.assignments === undefined) return false

	return component.qty - component.assignments.length > 0
}

export const breadcrumbs = {
	checkin: (component: Schema.Component) => breadcrumbLinks([
		{ title: 'Components', href: Routes.components() },
		{ title: component.name!, href: Routes.component(component) },
		{ title: 'Check In' },
	]),

	checkout: (component: Schema.Component) => breadcrumbLinks([
		{ title: 'Components', href: Routes.components() },
		{ title: component.name!, href: Routes.component(component) },
		{ title: 'Check Out' },
	]),

	edit: (component: Schema.Component) => breadcrumbLinks([
		{ title: 'Components', href: Routes.components() },
		{ title: component.name!, href: Routes.component(component) },
		{ title: 'Edit Component' },
	]),

	new: () => breadcrumbLinks([
		{ title: 'Components', href: Routes.components() },
		{ title: 'New Component' },
	]),

	show: (component: Schema.Component) => breadcrumbLinks([
		{ title: 'Components', href: Routes.components() },
		{ title: component.name! },
	]),
}
