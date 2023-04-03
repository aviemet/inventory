/* eslint no-unused-vars: 0 */

import React from 'react'
import { type ISearchableDropdownProps } from '@/Components/Inputs/SearchableDropdown'
import { type SelectProps, type InputProps } from '@mantine/core'

declare global {
	type HTTPVerb = 'post' | 'put' | 'get' | 'patch' | 'delete'

	type TInputType = 'button'|'checkbox'|'color'|'currency'|'date'|'datetime-local'|'email'|'file'|'hidden'|'image'|'month'|'number'|'password'|'radio'|'range'|'reset'|'search'|'select'|'submit'|'tel'|'text'|'textarea'|'time'|'url'

	type TAssignToable = 'Person' | 'Item' | 'Location'
	type TAssignable = 'Item' | 'Accessory' | 'Component' | 'Consumable' | 'License'

	declare namespace Schema {
		interface Pagination {
			count: number
			pages: number
			limit: number
			current_page: number
			next_page: number
			prev_page: number
			is_first_page: boolean
			is_last_page: boolean
		}

		interface Assignable {
			available_to_checkout: boolean
			assignments?: Assignment[]
		}

		interface AssignableSingle extends Assignable {
			assigned: boolean
		}
		interface AssignableQuantity extends Assignable {
			qty_available: number
		}
		interface AssignableConsume extends Assignable {
			qty_available: number
		}

		interface AssignToable {
			location?: Schema.Location
		}

		interface UID {
			uid?: string
		}

		interface Accessory extends AssignableQuantity, UID {}
		interface Address extends UID { }
		interface Assignment extends UID {
			assign_toable: Schema.Person | Schema.Item | Schema.Location
		}
		interface PublicActivityActivity {
			user?: Schema.User
			person?: Schema.Person
			route?: string
			created_at: string
		}
		interface Asset extends Assignable, UID { }
		interface Category extends UID { }
		interface Company extends UID { }
		interface Component extends AssignableQuantity, UID { }
		interface Consumable extends AssignableConsume, UID { }
		interface Contact extends UID { }
		interface Contract extends UID { }
		interface Department extends UID { }
		interface Email extends UID { }
		interface Field extends UID { }
		interface Fieldset extends UID { }
		interface FieldsetAssociation extends UID { }
		interface IpLease extends UID { }
		interface Item extends AssignableSingle, AssignToable, UID { }
		interface License extends AssignableQuantity, UID { }
		interface Location extends AssignToable, UID { }
		interface Manufacturer extends UID { }
		interface Model extends UID { }
		interface Network extends UID { }
		interface Nic extends UID { }
		interface Order extends UID { }
		interface Ownership extends UID { }
		interface Person extends AssignToable, UID {
			name?: string
		}
		interface PersonGroup extends UID { }
		interface Phone extends UID { }
		interface Purchase extends UID { }
		interface Role extends UID { }
		interface Ticket extends UID {
			asset?: Asset
		}
		interface StatusType extends UID { }
		interface User extends UID {
			password_confirmation?: string
		}
		interface Vendor extends UID { }
		interface Warranty extends UID { }
		interface Website extends UID { }

		type CompanyCounts = {
			locations: number
			items: number
			accessories: number
			consumables: number
			components: number
			departments: number
			licenses: number
			contracts: number
			people: number
			vendors: number
			manufacturers: number
		}

		interface CompanyWithCounts extends Schema.Company {
			counts: CompanyCounts
		}

		type DepartmentCounts = {
			items: number
			accessories: number
			consumables: number
			components: number
			licenses: number
			contracts: number
			people: number
		}

		interface DepartmentWithCounts extends Schema.Department {
			counts: DepartmentCounts
		}

		type ManufacturerCounts = {
			models: number
			items: number
			accessories: number
			consumables: number
			components: number
		}

		interface ManufacturerWithCounts extends Schema.Manufacturer {
			counts: ManufacturerCounts
		}

		interface ModelWithCount extends Schema.Model {
			count: number
		}

		interface CategoryWithQty extends Schema.Category {
			qty: number
		}

		interface PersonGroupPermissions extends Schema.PersonGroup {
			permissions: {
				company: {
					admin?: boolean
				}
				item: TPermissions | []
				accessory: TPermissions | []
				component: TPermissions | []
				consumable: TPermissions | []
				license: TPermissions | []
				network: TPermissions | []
				vendor: TPermissions | []
				contract: TPermissions | []
				category: TPermissions | []
				model: TPermissions | []
				manufacturer: TPermissions | []
				department: TPermissions | []
				location: TPermissions | []
				person: TPermissions | []
				user: TPermissions | []
			}
		}
	}

	type TPermissions = {
		index?: boolean
		show?: boolean
		create?: boolean
		update?: boolean
		delete?: boolean
		checkout?: boolean
		checkin?: boolean
	}

	type PaginatedModel<T> = {
		data: T
		pagination: Schema.Pagination
	}

	type FlashMessage = Record<'success' | 'alert' | 'info' | 'warning', string>

	// Inputs

	interface IInertiaInputProps {
		name: string
		model?: string
		errorKey?: string
		compact?: boolean
		onChange?: (value: T, form: UseFormProps) => void
		onBlur?: (value: T, form: UseFormProps) => void
	}

	interface IDropdownWithModalButton {
		name?: string
		model?: string
		label?: string
		fetchOnOpen?: string
		required?: boolean
		errorKey?: string
	}
}

declare module '@mantine/core' {
	export interface MantineThemeOther {
		colorSchemeOption: (light: any, dark: any) => any
		header: {
			height: number
		}
		navbar: {
			width: {
				closed: number
				open: number
			}
		}
		footer: {
			height: number
		}
		form: {
			label: {
				width: number | string
			}
		}
		table: {
			sortButtonHeight: number | string
			sortButtonWidth: number | string
		}
		colors: {
			checkoutButtonColor: string
			checkinButtonColor: string
			replenishButtonColor: string
		}
	}

	// https://phelipetls.github.io/posts/polymorphic-components-react-typescript/

	type PropsOf<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>

	type PolymorphicProps<
		T extends React.ElementType = React.ElementType,
		TProps = {}
	> = {
		as?: T
	} & TProps &
	Omit<PropsOf<T>, keyof TProps & 'as'>

	interface PolymorphicComponent<T extends React.Element> {
		as: T
	}
}
