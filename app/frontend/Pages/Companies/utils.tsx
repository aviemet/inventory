import { breadcrumbLinks, Routes } from '@/lib'

export const breadcrumbs = {
	edit: (company: Schema.Company) => breadcrumbLinks([
		{ title: 'Companies', href: Routes.companies() },
		{ title: company.name!, href: Routes.company(company.slug) },
		{ title: 'Edit Company' },
	]),

	new: () => breadcrumbLinks([
		{ title: 'Companies', href: Routes.companies() },
		{ title: 'New Company' },
	]),

	show: (company: Schema.Company) => breadcrumbLinks([
		{ title: 'Companies', href: Routes.companies() },
		{ title: company.name! },
	]),
}
