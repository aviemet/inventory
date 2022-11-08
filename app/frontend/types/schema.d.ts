declare namespace Schema {
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
		created_at: string;
		updated_at: string;
		status_type_id?: number | null;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		assignments?: Assignment[];
		status_type?: StatusType;
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
		created_at: string;
		updated_at: string;
		status_type_id?: number | null;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		assignments?: Assignment[];
		status_type?: StatusType;
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
		default_currency: string;
		created_at: string;
		updated_at: string;
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
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
	}

	interface CompanyAsSetup {
		id: number;
		name: string;
		slug: string;
		default_currency: string;
		created_at: string;
		updated_at: string;
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
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
	}

	interface CompanyAsSetup {
		id: number;
		name: string;
		slug: string;
		default_currency: string;
		created_at: string;
		updated_at: string;
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
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
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
		created_at: string;
		updated_at: string;
		status_type_id?: number | null;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		assignments?: Assignment[];
		status_type?: StatusType;
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
		created_at: string;
		updated_at: string;
		status_type_id?: number | null;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		assignments?: Assignment[];
		status_type?: StatusType;
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
		name?: string | null;
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
		assigned_assets?: Assignment[];
		assets?: Asset[];
		accessories?: Accessory[];
		components?: Component[];
		consumables?: Consumable[];
		licenses?: License[];
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
		created_at: string;
		updated_at: string;
		status_type_id?: number | null;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		status_type?: StatusType;
		roles?: Role[];
		vendor?: Vendor;
		default_location?: Location;
		model?: Model;
		category?: Category;
		manufacturer?: Manufacturer;
		warranty?: Warranty;
		assignments?: Assignment[];
		assigned_assets?: Assignment[];
		assets?: Asset[];
		items?: Item[];
		accessories?: Accessory[];
		components?: Component[];
		consumables?: Consumable[];
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
		name?: string | null;
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
		created_at: string;
		updated_at: string;
		status_type_id?: number | null;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		assignments?: Assignment[];
		status_type?: StatusType;
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
		assigned_assets?: Assignment[];
		assets?: Asset[];
		items?: Item[];
		accessories?: Accessory[];
		components?: Component[];
		consumables?: Consumable[];
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
		assigned_assets?: Assignment[];
		assets?: Asset[];
		items?: Item[];
		accessories?: Accessory[];
		components?: Component[];
		consumables?: Consumable[];
		licenses?: License[];
		fieldset_associations?: FieldsetAssociation[];
		manager?: Person;
		location?: Location;
		user?: User;
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

	interface StatusType {
		id: number;
		name?: string | null;
		slug: string;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
	}

	interface Ticket {
		id: number;
		subject?: string | null;
		description?: string | null;
		assigned_to_type?: string | null;
		assigned_to_id?: number | null;
		created_by_id?: number | null;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		created_by?: Person;
	}

	interface TicketMessage {
		id: number;
		body?: string | null;
		ticket_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		ticket?: Ticket;
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
		name?: string | null;
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
		item?: Item;
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


}
