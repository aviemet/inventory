declare namespace Schema {
	interface Accessory {
		id: number;
		type: string;
		name: string;
		asset_tag?: string;
		serial?: string;
		cost?: number;
		cost_currency: string;
		purchased_at?: string;
		requestable: boolean;
		min_qty?: number;
		qty?: number;
		notes?: string;
		model_id: number;
		vendor_id?: number;
		default_location_id?: number;
		status_label_id?: number;
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
		address_2?: string;
		city?: string;
		region?: string;
		country?: string;
		postal?: string;
		notes?: string;
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
		asset_tag?: string;
		serial?: string;
		cost?: number;
		cost_currency: string;
		purchased_at?: string;
		requestable: boolean;
		min_qty?: number;
		qty?: number;
		notes?: string;
		model_id: number;
		vendor_id?: number;
		default_location_id?: number;
		status_label_id?: number;
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
		qty?: number;
		assigned_at?: string;
		returned_at?: string;
		expected_at?: string;
		notes?: string;
		status?: 'approved'|'requested'|'denied';
		active: boolean;
		created_by_id?: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		created_by?: User;
		location?: Location;
	}

	interface Category {
		id: number;
		categorizable_type: string;
		name?: string;
		slug: string;
		description?: string;
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
		settings?: Record<string, any>;
		tickets_smtp_id?: number;
		app_smtp_id?: number;
		activities?: PublicActivityActivity[];
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		roles?: Role[];
		users?: User[];
		ldap?: Ldap;
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
		user_groups?: UserGroup[];
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
		settings?: Record<string, any>;
		tickets_smtp_id?: number;
		app_smtp_id?: number;
		activities?: PublicActivityActivity[];
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		roles?: Role[];
		users?: User[];
		ldap?: Ldap;
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
		user_groups?: UserGroup[];
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
	}

	interface Component {
		id: number;
		type: string;
		name: string;
		asset_tag?: string;
		serial?: string;
		cost?: number;
		cost_currency: string;
		purchased_at?: string;
		requestable: boolean;
		min_qty?: number;
		qty?: number;
		notes?: string;
		model_id: number;
		vendor_id?: number;
		default_location_id?: number;
		status_label_id?: number;
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
		asset_tag?: string;
		serial?: string;
		cost?: number;
		cost_currency: string;
		purchased_at?: string;
		requestable: boolean;
		min_qty?: number;
		qty?: number;
		notes?: string;
		model_id: number;
		vendor_id?: number;
		default_location_id?: number;
		status_label_id?: number;
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
		notes?: string;
		contactable_type?: string;
		contactable_id?: number;
		created_at: string;
		updated_at: string;
		primary_address_id?: number;
		primary_phone_id?: number;
		primary_email_id?: number;
		activities?: PublicActivityActivity[];
		addresses?: Address[];
		emails?: Email[];
		phones?: Phone[];
		websites?: Website[];
	}

	interface Contract {
		id: number;
		name: string;
		number?: string;
		notes?: string;
		begins_at?: string;
		ends_at?: string;
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
		name?: string;
		slug: string;
		notes?: string;
		location_id?: number;
		created_at: string;
		updated_at: string;
		manager_id?: number;
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
		assets?: Asset[];
		items?: Item[];
		accessories?: Accessory[];
		components?: Component[];
		consumables?: Consumable[];
		licenses?: License[];
		contracts?: Contract[];
		people?: Person[];
		vendors?: Vendor[];
	}

	interface Email {
		id: number;
		email?: string;
		notes?: string;
		contact_id: number;
		category_id?: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		contact?: Contact;
		category?: Category;
	}

	interface Field {
		id: number;
		name?: string;
		format?: string;
		element?: string;
		description?: string;
		notes?: string;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
	}

	interface Fieldset {
		id: number;
		name?: string;
		description?: string;
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
		address?: string;
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
		asset_tag?: string;
		serial?: string;
		cost?: number;
		cost_currency: string;
		purchased_at?: string;
		requestable: boolean;
		min_qty?: number;
		qty?: number;
		notes?: string;
		model_id: number;
		vendor_id?: number;
		default_location_id?: number;
		status_label_id?: number;
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
		host?: string;
		port?: string;
		domain?: string;
		username?: string;
		password?: string;
		tree_base?: string;
		user_search?: string;
		sync_interval?: string;
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
		qty?: number;
		key?: string;
		licenser_name?: string;
		licenser_email?: string;
		reassignable: boolean;
		cost?: number;
		cost_currency: string;
		purchased_at?: string;
		expires_at?: string;
		terminates_at?: string;
		maintained: boolean;
		notes?: string;
		category_id: number;
		vendor_id?: number;
		manufacturer_id: number;
		status_label_id?: number;
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
		currency?: string;
		parent_id?: number;
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
		name?: string;
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
		name?: string;
		slug: string;
		model_number?: string;
		notes?: string;
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
		name?: string;
		address?: string;
		gateway?: string;
		dhcp_start?: string;
		dhcp_end?: string;
		vlan_id?: number;
		notes?: string;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
	}

	interface Nic {
		id: number;
		mac?: string;
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
		number?: string;
		user_id: number;
		notes?: string;
		submitted_at?: string;
		ordered_at?: string;
		expected_at?: string;
		delivered_at?: string;
		canceled_at?: string;
		returned_at?: string;
		discount_decription?: string;
		returned_reason?: string;
		canceled_reason?: string;
		shipping_cents?: number;
		shipping_currency: string;
		tax_cents?: number;
		tax_currency: string;
		discount_cents?: number;
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
		department_id?: number;
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
		first_name?: string;
		middle_name?: string;
		last_name?: string;
		active: boolean;
		employee_number?: string;
		job_title?: string;
		guid?: string;
		manager_id?: number;
		location_id?: number;
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

	interface PersonAsCreate {
		id: number;
		first_name?: string;
		middle_name?: string;
		last_name?: string;
		active: boolean;
		employee_number?: string;
		job_title?: string;
		guid?: string;
		manager_id?: number;
		location_id?: number;
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
		extension?: string;
		notes?: string;
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
		trackable_type?: string;
		trackable_id?: number;
		owner_type?: string;
		owner_id?: number;
		key?: string;
		parameters?: Record<string, any>;
		recipient_type?: string;
		recipient_id?: number;
		created_at: string;
		updated_at: string;
	}

	interface Purchase {
		id: number;
		purchasable_type: string;
		purchasable_id: number;
		order_id?: number;
		cost: number;
		cost_currency: string;
		qty?: number;
		notes?: string;
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
		name?: string;
		resource_type?: string;
		resource_id?: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		users?: User[];
	}

	interface Smtp {
		id: number;
		name?: string;
		address?: string;
		port?: number;
		domain?: string;
		auth?: string;
		tls?: boolean;
		username?: string;
		password?: string;
		notes?: string;
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
		name?: string;
		status_type?: 'deployable'|'pending'|'undeployable'|'archived';
		slug: string;
		description?: string;
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
		number: number;
		description?: string;
		priority?: 'urgent'|'high'|'standard'|'low';
		status_id?: number;
		primary_contact_id?: number;
		created_by_id?: number;
		asset_id?: number;
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
		body?: string;
		ticket_id: number;
		parent_id?: number;
		created_by_id?: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		ticket?: Ticket;
		created_by?: Person;
		parent?: TicketMessage;
	}

	interface TicketStatus {
		id: number;
		name?: string;
		status_type?: 'open'|'pending'|'closed';
		slug: string;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		tickets?: Ticket[];
	}

	interface User {
		id: number;
		email: string;
		password?: string;
		reset_password_token?: string;
		reset_password_sent_at?: string;
		remember_created_at?: string;
		sign_in_count: number;
		current_sign_in_at?: string;
		last_sign_in_at?: string;
		current_sign_in_ip?: string;
		last_sign_in_ip?: string;
		confirmation_token?: string;
		confirmed_at?: string;
		confirmation_sent_at?: string;
		unconfirmed_email?: string;
		failed_attempts: number;
		unlock_token?: string;
		locked_at?: string;
		created_at: string;
		updated_at: string;
		invitation_token?: string;
		invitation_created_at?: string;
		invitation_sent_at?: string;
		invitation_accepted_at?: string;
		invitation_limit?: number;
		invited_by_type?: string;
		invited_by_id?: number;
		invitations_count?: number;
		person_id?: number;
		active_company_id?: number;
		active?: boolean;
		table_preferences?: Record<string, any>;
		user_preferences?: Record<string, any>;
		activities?: PublicActivityActivity[];
		roles?: Role[];
		person?: Person;
		active_company?: Company;
		companies?: Company[];
		user_group_assignments?: UserGroupAssignment[];
		groups?: UserGroup[];
	}

	interface UserGroup {
		id: number;
		name?: string;
		slug: string;
		description?: string;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		user_group_assignments?: UserGroupAssignment[];
		users?: User[];
	}

	interface UserGroupAssignment {
		id: number;
		user_id: number;
		user_group_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
		user?: User;
		user_group?: UserGroup;
	}

	interface Vendor {
		id: number;
		name: string;
		slug: string;
		url?: string;
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
		length?: number;
		notes?: string;
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
		url?: string;
		name?: string;
		notes?: string;
		contact_id: number;
		created_at: string;
		updated_at: string;
		activities?: PublicActivityActivity[];
	}


}
