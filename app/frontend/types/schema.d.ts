declare namespace Schema {
<<<<<<< HEAD
	interface Accessory {
		id: number;
		type: string;
		name: string;
		asset_tag?: string | null;
		serial?: string | null;
		cost?: number | null;
		cost_currency: string;
		purchased_at?: string | null;
		requestable: boolean;
		min_qty?: number | null;
		qty?: number | null;
		notes?: string | null;
		model_id: number;
		vendor_id?: number | null;
		default_location_id?: number | null;
		status_label_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		assignments?: Assignment[];
		status_label?: StatusLabel;
		roles?: Role[];
		vendor?: Vendor;
		default_location?: Location;
		model?: Model;
		category?: Category;
		manufacturer?: Manufacturer;
		warranty?: Warranty;
	}

	interface Address {
		id: number;
		address: string;
		address_2?: string | null;
		city?: string | null;
		region?: string | null;
		country?: string | null;
		postal?: string | null;
		notes?: string | null;
		contact_id: number;
		category_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		contact?: Contact;
		category?: Category;
	}

	interface Asset {
		id: number;
		type: string;
		name: string;
		asset_tag?: string | null;
		serial?: string | null;
		cost?: number | null;
		cost_currency: string;
		purchased_at?: string | null;
		requestable: boolean;
		min_qty?: number | null;
		qty?: number | null;
		notes?: string | null;
		model_id: number;
		vendor_id?: number | null;
		default_location_id?: number | null;
		status_label_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		assignments?: Assignment[];
		status_label?: StatusLabel;
		roles?: Role[];
		vendor?: Vendor;
		default_location?: Location;
		model?: Model;
		category?: Category;
		manufacturer?: Manufacturer;
		warranty?: Warranty;
	}

	interface Assignment {
		id: number;
		assignable_type: TAssignable;
		assignable_id: number;
		assign_toable_type: TAssignToable;
		assign_toable_id: number;
		location_id: number;
		qty?: number | null;
		assigned_at?: string | null;
		returned_at?: string | null;
		expected_at?: string | null;
		notes?: string | null;
		status?: 'approved'|'requested'|'denied' | null;
		active: boolean;
		created_by_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		created_by?: User;
		location?: Location;
	}

	interface Category {
		id: number;
		categorizable_type: string;
		name?: string | null;
		slug: string;
		description?: string | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		fieldset_associations?: FieldsetAssociation[];
	}

	interface Company {
		id: number;
		name: string;
		slug: string;
		created_at: string;
		updated_at: string;
		default_currency: string;
		settings?: Record<string, any> | null;
		tickets_smtp_id?: number | null;
		app_smtp_id?: number | null;
		activities?: PublicActivityActivity[];
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		roles?: Role[];
		users?: User[];
		ldaps?: Ldap[];
		ownerships?: Ownership[];
		assets?: Asset[];
		models?: Model[];
		departments?: Department[];
		locations?: Location[];
		licenses?: License[];
		contracts?: Contract[];
		networks?: Network[];
		people?: Person[];
		purchases?: Purchase[];
		vendors?: Vendor[];
		manufacturers?: Manufacturer[];
		orders?: Order[];
		categories?: Category[];
		smtps?: Smtp[];
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
	}

	interface CompanyAsSetup {
		id: number;
		name: string;
		slug: string;
		created_at: string;
		updated_at: string;
		default_currency: string;
		settings?: Record<string, any> | null;
		tickets_smtp_id?: number | null;
		app_smtp_id?: number | null;
		activities?: PublicActivityActivity[];
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		roles?: Role[];
		users?: User[];
		ldaps?: Ldap[];
		ownerships?: Ownership[];
		assets?: Asset[];
		models?: Model[];
		departments?: Department[];
		locations?: Location[];
		licenses?: License[];
		contracts?: Contract[];
		networks?: Network[];
		people?: Person[];
		purchases?: Purchase[];
		vendors?: Vendor[];
		manufacturers?: Manufacturer[];
		orders?: Order[];
		categories?: Category[];
		smtps?: Smtp[];
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
	}

	interface Component {
		id: number;
		type: string;
		name: string;
		asset_tag?: string | null;
		serial?: string | null;
		cost?: number | null;
		cost_currency: string;
		purchased_at?: string | null;
		requestable: boolean;
		min_qty?: number | null;
		qty?: number | null;
		notes?: string | null;
		model_id: number;
		vendor_id?: number | null;
		default_location_id?: number | null;
		status_label_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		assignments?: Assignment[];
		status_label?: StatusLabel;
		roles?: Role[];
		vendor?: Vendor;
		default_location?: Location;
		model?: Model;
		category?: Category;
		manufacturer?: Manufacturer;
		warranty?: Warranty;
	}

	interface Consumable {
		id: number;
		type: string;
		name: string;
		asset_tag?: string | null;
		serial?: string | null;
		cost?: number | null;
		cost_currency: string;
		purchased_at?: string | null;
		requestable: boolean;
		min_qty?: number | null;
		qty?: number | null;
		notes?: string | null;
		model_id: number;
		vendor_id?: number | null;
		default_location_id?: number | null;
		status_label_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		assignments?: Assignment[];
		status_label?: StatusLabel;
		roles?: Role[];
		vendor?: Vendor;
		default_location?: Location;
		model?: Model;
		category?: Category;
		manufacturer?: Manufacturer;
		warranty?: Warranty;
	}

	interface Contact {
		id: number;
		notes?: string | null;
		contactable_type?: string | null;
		contactable_id?: number | null;
		created_at: string;
		updated_at: string;
		primary_address_id?: number | null;
		primary_phone_id?: number | null;
		primary_email_id?: number | null;
		activities?: PublicActivityActivity[];
		addresses?: Address[];
		emails?: Email[];
		phones?: Phone[];
		websites?: Website[];
	}

	interface Contract {
		id: number;
		name: string;
		number?: string | null;
		notes?: string | null;
		begins_at?: string | null;
		ends_at?: string | null;
		vendor_id: number;
		category_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		roles?: Role[];
		category?: Category;
		vendor?: Vendor;
	}

	interface Department {
		id: number;
		name?: string | null;
		slug: string;
		notes?: string | null;
		location_id?: number | null;
		created_at: string;
		updated_at: string;
		manager_id?: number | null;
		activities?: PublicActivityActivity[];
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		roles?: Role[];
		location?: Location;
		manager?: Person;
		ownerships?: Ownership[];
		items?: Item[];
		contracts?: Contract[];
		people?: Person[];
		vendors?: Vendor[];
	}

	interface Email {
		id: number;
		email?: string | null;
		notes?: string | null;
		contact_id: number;
		category_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		contact?: Contact;
		category?: Category;
	}

	interface Field {
		id: number;
		name?: string | null;
		format?: string | null;
		element?: string | null;
		description?: string | null;
		notes?: string | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
	}

	interface Fieldset {
		id: number;
		name?: string | null;
		description?: string | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
	}

	interface FieldsetAssociation {
		id: number;
		fieldset_id: number;
		fieldable_type: string;
		fieldable_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		fieldset?: Fieldset;
	}

	interface IpLease {
		id: number;
		nic_id: number;
		address?: string | null;
		active: boolean;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		nic?: Nic;
		item?: Asset;
	}

	interface Item {
		id: number;
		type: string;
		name: string;
		asset_tag?: string | null;
		serial?: string | null;
		cost?: number | null;
		cost_currency: string;
		purchased_at?: string | null;
		requestable: boolean;
		min_qty?: number | null;
		qty?: number | null;
		notes?: string | null;
		model_id: number;
		vendor_id?: number | null;
		default_location_id?: number | null;
		status_label_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		status_label?: StatusLabel;
		roles?: Role[];
		vendor?: Vendor;
		default_location?: Location;
		model?: Model;
		category?: Category;
		manufacturer?: Manufacturer;
		warranty?: Warranty;
		assignments?: Assignment[];
		possessions?: Assignment[];
		assets?: Asset[];
		items?: Asset[];
		accessories?: Asset[];
		components?: Asset[];
		consumables?: Asset[];
		licenses?: License[];
		nics?: Nic[];
		ips?: IpLease[];
		ip_leases?: IpLease[];
	}

	interface Ldap {
		id: number;
		name: string;
		host?: string | null;
		port?: string | null;
		domain?: string | null;
		username?: string | null;
		password?: string | null;
		tree_base?: string | null;
		user_search?: string | null;
		sync_interval?: string | null;
		company_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		roles?: Role[];
		company?: Company;
	}

	interface License {
		id: number;
		name: string;
		seats?: number | null;
		key?: string | null;
		licenser_name?: string | null;
		licenser_email?: string | null;
		reassignable: boolean;
		cost?: number | null;
		cost_currency: string;
		purchased_at?: string | null;
		expires_at?: string | null;
		terminates_at?: string | null;
		maintained: boolean;
		notes?: string | null;
		category_id: number;
		vendor_id?: number | null;
		manufacturer_id: number;
		status_label_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		assignments?: Assignment[];
		status_label?: StatusLabel;
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		roles?: Role[];
		category?: Category;
		vendor?: Vendor;
		manufacturer?: Manufacturer;
	}

	interface Location {
		id: number;
		name: string;
		slug: string;
		currency?: string | null;
		parent_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		possessions?: Assignment[];
		assets?: Asset[];
		items?: Asset[];
		accessories?: Asset[];
		components?: Asset[];
		consumables?: Asset[];
		licenses?: License[];
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		fieldset_associations?: FieldsetAssociation[];
		roles?: Role[];
		parent?: Location;
		people?: Person[];
	}

	interface Manufacturer {
		id: number;
		name?: string | null;
		slug: string;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		roles?: Role[];
		models?: Model[];
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
	}

	interface Model {
		id: number;
		name?: string | null;
		slug: string;
		model_number?: string | null;
		notes?: string | null;
		category_id: number;
		manufacturer_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		fieldset_associations?: FieldsetAssociation[];
		roles?: Role[];
		manufacturer?: Manufacturer;
		category?: Category;
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
	}

	interface Network {
		id: number;
		name?: string | null;
		address?: string | null;
		gateway?: string | null;
		dhcp_start?: string | null;
		dhcp_end?: string | null;
		vlan_id?: number | null;
		notes?: string | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
	}

	interface Nic {
		id: number;
		mac?: string | null;
		nic_type: 'ethernet'|'wifi'|'fiber'|'cellular';
		item_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		item?: Asset;
		ips?: IpLease[];
		ip_leases?: IpLease[];
	}

	interface Order {
		id: number;
		number?: string | null;
		user_id: number;
		notes?: string | null;
		submitted_at?: string | null;
		ordered_at?: string | null;
		expected_at?: string | null;
		delivered_at?: string | null;
		canceled_at?: string | null;
		returned_at?: string | null;
		discount_decription?: string | null;
		returned_reason?: string | null;
		canceled_reason?: string | null;
		shipping_cents?: number | null;
		shipping_currency: string;
		tax_cents?: number | null;
		tax_currency: string;
		discount_cents?: number | null;
		discount_currency: string;
		vendor_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		roles?: Role[];
		user?: User;
		vendor?: Vendor;
		person?: Person;
		purchases?: Purchase[];
	}

	interface Ownership {
		id: number;
		company_id: number;
		department_id?: number | null;
		ownable_type: string;
		ownable_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		company?: Company;
		department?: Department;
	}

	interface Person {
		id: number;
		first_name?: string | null;
		middle_name?: string | null;
		last_name?: string | null;
		active: boolean;
		employee_number?: string | null;
		job_title?: string | null;
		guid?: string | null;
		manager_id?: number | null;
		location_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		possessions?: Assignment[];
		assets?: Asset[];
		items?: Asset[];
		accessories?: Asset[];
		components?: Asset[];
		consumables?: Asset[];
		licenses?: License[];
		fieldset_associations?: FieldsetAssociation[];
		manager?: Person;
		location?: Location;
		user?: User;
		ticket_assignments?: TicketAssignment[];
		tickets?: Ticket[];
	}

	interface Phone {
		id: number;
		number: string;
		extension?: string | null;
		notes?: string | null;
		contact_id: number;
		category_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		contact?: Contact;
		category?: Category;
	}

	interface PublicActivityActivity {
		id: number;
		trackable_type?: string | null;
		trackable_id?: number | null;
		owner_type?: string | null;
		owner_id?: number | null;
		key?: string | null;
		parameters?: Record<string, any> | null;
		recipient_type?: string | null;
		recipient_id?: number | null;
		created_at: string;
		updated_at: string;
	}

	interface Purchase {
		id: number;
		purchasable_type: string;
		purchasable_id: number;
		order_id?: number | null;
		cost: number;
		cost_currency: string;
		qty?: number | null;
		notes?: string | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		roles?: Role[];
		item?: Item;
		accessory?: Accessory;
		component?: Component;
		consumable?: Consumable;
		order?: Order;
	}

	interface Role {
		id: number;
		name?: string | null;
		resource_type?: string | null;
		resource_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		users?: User[];
	}

	interface Smtp {
		id: number;
		name?: string | null;
		address?: string | null;
		port?: number | null;
		domain?: string | null;
		auth?: string | null;
		tls?: boolean | null;
		username?: string | null;
		password?: string | null;
		notes?: string | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		roles?: Role[];
	}

	interface StatusLabel {
		id: number;
		name?: string | null;
		status_type?: 'deployable'|'pending'|'undeployable'|'archived' | null;
		slug: string;
		description?: string | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		assets?: Asset[];
		items?: Item[];
		accessories?: Accessory[];
		components?: Component[];
		licenses?: License[];
	}

	interface Ticket {
		id: number;
		subject: string;
		description?: string | null;
		priority?: 'urgent'|'high'|'standard'|'low' | null;
		status_id?: number | null;
		primary_contact_id?: number | null;
		created_by_id?: number | null;
		asset_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		created_by?: Person;
		status?: TicketStatus;
		primary_contact?: Person;
		asset?: Asset;
		assignments?: TicketAssignment[];
		assignees?: Person[];
		messages?: TicketMessage[];
	}

	interface TicketAssignment {
		id: number;
		person_id: number;
		ticket_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		person?: Person;
		ticket?: Ticket;
	}

	interface TicketMessage {
		id: number;
		body?: string | null;
		ticket_id: number;
		parent_id?: number | null;
		created_by_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		ticket?: Ticket;
		created_by?: Person;
		parent?: TicketMessage;
	}

	interface TicketStatus {
		id: number;
		name?: string | null;
		status_type?: 'open'|'pending'|'closed' | null;
		slug: string;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		tickets?: Ticket[];
	}

	interface User {
		id: number;
		email: string;
		password?: string | null;
		reset_password_token?: string | null;
		reset_password_sent_at?: string | null;
		remember_created_at?: string | null;
		sign_in_count: number;
		current_sign_in_at?: string | null;
		last_sign_in_at?: string | null;
		current_sign_in_ip?: string | null;
		last_sign_in_ip?: string | null;
		confirmation_token?: string | null;
		confirmed_at?: string | null;
		confirmation_sent_at?: string | null;
		unconfirmed_email?: string | null;
		failed_attempts: number;
		unlock_token?: string | null;
		locked_at?: string | null;
		created_at: string;
		updated_at: string;
		person_id?: number | null;
		active_company_id?: number | null;
		active?: boolean | null;
		table_preferences?: Record<string, any> | null;
		user_preferences?: Record<string, any> | null;
		activities?: PublicActivityActivity[];
		roles?: Role[];
		person?: Person;
		active_company?: Company;
		companies?: Company[];
	}

	interface Vendor {
		id: number;
		name: string;
		slug: string;
		url?: string | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		contracts?: Contract[];
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
		licenses?: License[];
	}

	interface Warranty {
		id: number;
		asset_id: number;
		length?: number | null;
		notes?: string | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		asset?: Asset;
	}

	interface Website {
		id: number;
		url?: string | null;
		name?: string | null;
		notes?: string | null;
		contact_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
	}


=======
	export type { default as AccessoriesCheckin } from './Accessories/Checkin'
	export type { default as AccessoriesCheckout } from './Accessories/Checkout'
	export type { default as AccessoriesEdit } from './Accessories/Edit'
	export type { default as AccessoriesIndex } from './Accessories/Index'
	export type { default as AccessoriesNew } from './Accessories/New'
	export type { default as AccessoriesShow } from './Accessories/Show'
	export type { default as Accessory } from './Accessory'
	export type { default as ActivitiesDashboard } from './Activities/Dashboard'
	export type { default as Activity } from './Activity'
	export type { default as Address } from './Address'
	export type { default as Asset } from './Asset'
	export type { default as AssetsIndex } from './Assets/Index'
	export type { default as AssignToable } from './AssignToable'
	export type { default as AssignableConsume } from './Assignable/Consume'
	export type { default as AssignableQuantity } from './Assignable/Quantity'
	export type { default as AssignableSingle } from './Assignable/Single'
	export type { default as Assignable } from './Assignable'
	export type { default as Assignment } from './Assignment'
	export type { default as AssignmentsNew } from './Assignments/New'
	export type { default as AssignmentsShallow } from './Assignments/Shallow'
	export type { default as CategoriesEdit } from './Categories/Edit'
	export type { default as CategoriesIndex } from './Categories/Index'
	export type { default as CategoriesNew } from './Categories/New'
	export type { default as CategoriesOptions } from './Categories/Options'
	export type { default as CategoriesShow } from './Categories/Show'
	export type { default as Category } from './Category'
	export type { default as CompaniesEdit } from './Companies/Edit'
	export type { default as CompaniesIndex } from './Companies/Index'
	export type { default as CompaniesNew } from './Companies/New'
	export type { default as CompaniesShow } from './Companies/Show'
	export type { default as Company } from './Company'
	export type { default as Component } from './Component'
	export type { default as ComponentsCheckin } from './Components/Checkin'
	export type { default as ComponentsCheckout } from './Components/Checkout'
	export type { default as ComponentsEdit } from './Components/Edit'
	export type { default as ComponentsIndex } from './Components/Index'
	export type { default as ComponentsNew } from './Components/New'
	export type { default as ComponentsShow } from './Components/Show'
	export type { default as Consumable } from './Consumable'
	export type { default as ConsumablesCheckin } from './Consumables/Checkin'
	export type { default as ConsumablesCheckout } from './Consumables/Checkout'
	export type { default as ConsumablesEdit } from './Consumables/Edit'
	export type { default as ConsumablesIndex } from './Consumables/Index'
	export type { default as ConsumablesNew } from './Consumables/New'
	export type { default as ConsumablesShow } from './Consumables/Show'
	export type { default as Contact } from './Contact'
	export type { default as Contract } from './Contract'
	export type { default as ContractsEdit } from './Contracts/Edit'
	export type { default as ContractsIndex } from './Contracts/Index'
	export type { default as ContractsNew } from './Contracts/New'
	export type { default as ContractsShow } from './Contracts/Show'
	export type { default as Department } from './Department'
	export type { default as DepartmentsEdit } from './Departments/Edit'
	export type { default as DepartmentsIndex } from './Departments/Index'
	export type { default as DepartmentsNew } from './Departments/New'
	export type { default as DepartmentsOptions } from './Departments/Options'
	export type { default as DepartmentsShow } from './Departments/Show'
	export type { default as Email } from './Email'
	export type { default as EmailsNew } from './Emails/New'
	export type { default as IpLease } from './IpLease'
	export type { default as IpLeasesOptions } from './IpLeases/Options'
	export type { default as Item } from './Item'
	export type { default as ItemsCheckin } from './Items/Checkin'
	export type { default as ItemsCheckout } from './Items/Checkout'
	export type { default as ItemsEdit } from './Items/Edit'
	export type { default as ItemsIndex } from './Items/Index'
	export type { default as ItemsNew } from './Items/New'
	export type { default as ItemsOptions } from './Items/Options'
	export type { default as ItemsShow } from './Items/Show'
	export type { default as Ldap } from './Ldap'
	export type { default as LdapsIndex } from './Ldaps/Index'
	export type { default as License } from './License'
	export type { default as LicensesCheckin } from './Licenses/Checkin'
	export type { default as LicensesCheckout } from './Licenses/Checkout'
	export type { default as LicensesEdit } from './Licenses/Edit'
	export type { default as LicensesIndex } from './Licenses/Index'
	export type { default as LicensesNew } from './Licenses/New'
	export type { default as LicensesShow } from './Licenses/Show'
	export type { default as Location } from './Location'
	export type { default as LocationsEdit } from './Locations/Edit'
	export type { default as LocationsIndex } from './Locations/Index'
	export type { default as LocationsNew } from './Locations/New'
	export type { default as LocationsOptions } from './Locations/Options'
	export type { default as LocationsShow } from './Locations/Show'
	export type { default as Manufacturer } from './Manufacturer'
	export type { default as ManufacturersEdit } from './Manufacturers/Edit'
	export type { default as ManufacturersIndex } from './Manufacturers/Index'
	export type { default as ManufacturersNew } from './Manufacturers/New'
	export type { default as ManufacturersOptions } from './Manufacturers/Options'
	export type { default as ManufacturersShow } from './Manufacturers/Show'
	export type { default as Model } from './Model'
	export type { default as ModelsEdit } from './Models/Edit'
	export type { default as ModelsIndex } from './Models/Index'
	export type { default as ModelsNew } from './Models/New'
	export type { default as ModelsOptions } from './Models/Options'
	export type { default as ModelsShow } from './Models/Show'
	export type { default as Network } from './Network'
	export type { default as NetworksEdit } from './Networks/Edit'
	export type { default as NetworksIndex } from './Networks/Index'
	export type { default as NetworksNew } from './Networks/New'
	export type { default as NetworksShow } from './Networks/Show'
	export type { default as Nic } from './Nic'
	export type { default as Order } from './Order'
	export type { default as Ownership } from './Ownership'
	export type { default as PeopleEdit } from './People/Edit'
	export type { default as PeopleIndex } from './People/Index'
	export type { default as PeopleNew } from './People/New'
	export type { default as PeopleOptions } from './People/Options'
	export type { default as PeopleShow } from './People/Show'
	export type { default as PersonGroup } from './PersonGroup'
	export type { default as PersonGroupsEdit } from './PersonGroups/Edit'
	export type { default as PersonGroupsIndex } from './PersonGroups/Index'
	export type { default as PersonGroupsNew } from './PersonGroups/New'
	export type { default as PersonGroupsOptions } from './PersonGroups/Options'
	export type { default as PersonGroupsShow } from './PersonGroups/Show'
	export type { default as Person } from './Person'
	export type { default as Phone } from './Phone'
	export type { default as Purchase } from './Purchase'
	export type { default as Role } from './Role'
	export type { default as Spotlight } from './Spotlight'
	export type { default as StatusLabel } from './StatusLabel'
	export type { default as TicketAssignment } from './TicketAssignment'
	export type { default as TicketAssignmentsEdit } from './TicketAssignments/Edit'
	export type { default as TicketAssignmentsIndex } from './TicketAssignments/Index'
	export type { default as TicketAssignmentsNew } from './TicketAssignments/New'
	export type { default as TicketAssignmentsShow } from './TicketAssignments/Show'
	export type { default as TicketMessage } from './TicketMessage'
	export type { default as Ticket } from './Ticket'
	export type { default as TicketStatus } from './TicketStatus'
	export type { default as TicketStatusesEdit } from './TicketStatuses/Edit'
	export type { default as TicketStatusesIndex } from './TicketStatuses/Index'
	export type { default as TicketStatusesNew } from './TicketStatuses/New'
	export type { default as TicketStatusesShow } from './TicketStatuses/Show'
	export type { default as TicketsEdit } from './Tickets/Edit'
	export type { default as TicketsIndex } from './Tickets/Index'
	export type { default as TicketsNew } from './Tickets/New'
	export type { default as TicketsOptions } from './Tickets/Options'
	export type { default as TicketsShow } from './Tickets/Show'
	export type { default as User } from './User'
	export type { default as UsersEdit } from './Users/Edit'
	export type { default as UsersIndex } from './Users/Index'
	export type { default as UsersNew } from './Users/New'
	export type { default as UsersShow } from './Users/Show'
	export type { default as Vendor } from './Vendor'
	export type { default as VendorsEdit } from './Vendors/Edit'
	export type { default as VendorsIndex } from './Vendors/Index'
	export type { default as VendorsNew } from './Vendors/New'
	export type { default as VendorsOptions } from './Vendors/Options'
	export type { default as VendorsShow } from './Vendors/Show'
	export type { default as Warranty } from './Warranty'
	export type { default as Website } from './Website'
>>>>>>> ae05894973d704fc166a110a2bcdc4dfc408e765
}
