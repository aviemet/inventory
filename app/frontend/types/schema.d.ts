declare namespace Schema {
	type User = {
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
		roles?: Role[];
		audits?: AuditedAudit[];
		person?: Person;
		active_company?: Company;
		companies?: Company[];
	}

	type Department = {
		id: number;
		name?: string | null;
		slug: string;
		location_id?: number | null;
		created_at: string;
		updated_at: string;
		manager_id?: number | null;
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		posessions?: Assignment[];
		accessories?: Accessory[];
		licenses?: License[];
		roles?: Role[];
		audits?: AuditedAudit[];
		location?: Location;
		manager?: Person;
		ownerships?: Ownership[];
		items?: Item[];
		contracts?: Contract[];
		people?: Person[];
		vendors?: Vendor[];
	}

	type Category = {
		id: number;
		categorizable_type: string;
		name?: string | null;
		slug: string;
		description?: string | null;
		created_at: string;
		updated_at: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		fieldset_associations?: FieldsetAssociation[];
		audits?: AuditedAudit[];
	}

	type Item = {
		id: number;
		name?: string | null;
		asset_tag?: string | null;
		serial?: string | null;
		cost?: number | null;
		cost_currency: string;
		purchased_at?: string | null;
		requestable: boolean;
		notes?: string | null;
		model_id: number;
		vendor_id?: number | null;
		default_location_id?: number | null;
		created_at: string;
		updated_at: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		assignments?: Assignment[];
		posessions?: Assignment[];
		items?: Item[];
		accessories?: Accessory[];
		licenses?: License[];
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		roles?: Role[];
		audits?: AuditedAudit[];
		nics?: Nic[];
		ips?: IpLease[];
		ip_leases?: IpLease[];
		model?: Model;
		vendor?: Vendor;
		default_location?: Location;
		category?: Category;
		manufacturer?: Manufacturer;
		warranty?: Warranty;
	}

	type Contact = {
		id: number;
		notes?: string | null;
		contactable_type?: string | null;
		contactable_id?: number | null;
		created_at: string;
		updated_at: string;
		primary_address_id?: number | null;
		primary_phone_id?: number | null;
		primary_email_id?: number | null;
		addresses?: Address[];
		emails?: Email[];
		phones?: Phone[];
		websites?: Website[];
	}

	type Website = {
		id: number;
		url?: string | null;
		name?: string | null;
		notes?: string | null;
		contact_id: number;
		created_at: string;
		updated_at: string;
		audits?: AuditedAudit[];
	}

	type Manufacturer = {
		id: number;
		name?: string | null;
		slug: string;
		created_at: string;
		updated_at: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		roles?: Role[];
		audits?: AuditedAudit[];
		models?: Model[];
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
	}

	type Fieldset = {
		id: number;
		name?: string | null;
		description?: string | null;
		created_at: string;
		updated_at: string;
		audits?: AuditedAudit[];
	}

	type Nic = {
		id: number;
		mac?: string | null;
		nic_type: 'ethernet'|'wifi'|'fiber';
		item_id: number;
		created_at: string;
		updated_at: string;
		audits?: AuditedAudit[];
		item?: Item;
		ips?: IpLease[];
		ip_leases?: IpLease[];
	}

	type IpLease = {
		id: number;
		nic_id: number;
		address?: string | null;
		active: boolean;
		created_at: string;
		updated_at: string;
		audits?: AuditedAudit[];
		nic?: Nic;
		item?: Item;
	}

	type Component = {
		id: number;
		name?: string | null;
		serial?: string | null;
		min_qty?: number | null;
		qty?: number | null;
		cost?: number | null;
		cost_currency: string;
		purchased_at?: string | null;
		notes?: string | null;
		model_id: number;
		vendor_id: number;
		default_location_id?: number | null;
		created_at: string;
		updated_at: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		assignments?: Assignment[];
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		audits?: AuditedAudit[];
		model?: Model;
		vendor?: Vendor;
		default_location?: Location;
		category?: Category;
		manufacturer?: Manufacturer;
	}

	type Contract = {
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
		owner?: Ownership;
		company?: Company;
		department?: Department;
		roles?: Role[];
		audits?: AuditedAudit[];
		category?: Category;
		vendor?: Vendor;
	}

	type Email = {
		id: number;
		email?: string | null;
		notes?: string | null;
		contact_id: number;
		category_id: number;
		created_at: string;
		updated_at: string;
		audits?: AuditedAudit[];
		contact?: Contact;
		category?: Category;
	}

	type License = {
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
		owner?: Ownership;
		company?: Company;
		department?: Department;
		assignments?: Assignment[];
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		roles?: Role[];
		audits?: AuditedAudit[];
		category?: Category;
		vendor?: Vendor;
		manufacturer?: Manufacturer;
	}

	type Network = {
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
		owner?: Ownership;
		company?: Company;
		department?: Department;
		audits?: AuditedAudit[];
	}

	type Assignment = {
		id: number;
		assignable_type: string;
		assignable_id: number;
		assign_toable_type: string;
		assign_toable_id: number;
		qty?: number | null;
		status?: 'requested'|'approved'|'denied' | null;
		assigned_at?: string | null;
		returned_at?: string | null;
		expected_at?: string | null;
		notes?: string | null;
		active: boolean;
		created_by_id?: number | null;
		created_at: string;
		updated_at: string;
		audits?: AuditedAudit[];
		created_by?: User;
	}

	type Location = {
		id: number;
		name?: string | null;
		slug: string;
		parent_id?: number | null;
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		posessions?: Assignment[];
		items?: Item[];
		accessories?: Accessory[];
		licenses?: License[];
		roles?: Role[];
		audits?: AuditedAudit[];
		parent?: Location;
	}

	type Warranty = {
		id: number;
		item_id: number;
		length?: number | null;
		notes?: string | null;
		created_at: string;
		updated_at: string;
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		audits?: AuditedAudit[];
		item?: Item;
	}

	type Model = {
		id: number;
		name?: string | null;
		slug: string;
		model_number?: string | null;
		notes?: string | null;
		category_id: number;
		manufacturer_id: number;
		created_at: string;
		updated_at: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		fieldset_associations?: FieldsetAssociation[];
		roles?: Role[];
		audits?: AuditedAudit[];
		manufacturer?: Manufacturer;
		category?: Category;
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
	}

	type Accessory = {
		id: number;
		name?: string | null;
		serial?: string | null;
		asset_tag?: string | null;
		min_qty?: number | null;
		qty?: number | null;
		cost?: number | null;
		cost_currency: string;
		requestable: boolean;
		notes?: string | null;
		model_id: number;
		vendor_id?: number | null;
		default_location_id?: number | null;
		created_at: string;
		updated_at: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		assignments?: Assignment[];
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		roles?: Role[];
		audits?: AuditedAudit[];
		model?: Model;
		vendor?: Vendor;
		default_location?: Location;
		category?: Category;
		manufacturer?: Manufacturer;
	}

	type StatusType = {
		id: number;
		name?: string | null;
		slug: string;
		created_at: string;
		updated_at: string;
		audits?: AuditedAudit[];
	}

	type Purchase = {
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
		owner?: Ownership;
		company?: Company;
		department?: Department;
		roles?: Role[];
		audits?: AuditedAudit[];
		item?: Item;
		accessory?: Accessory;
		component?: Component;
		consumable?: Consumable;
		order?: Order;
	}

	type Role = {
		id: number;
		name?: string | null;
		resource_type?: string | null;
		resource_id?: number | null;
		created_at: string;
		updated_at: string;
		audits?: AuditedAudit[];
		users?: User[];
	}

	type FieldsetAssociation = {
		id: number;
		fieldset_id: number;
		fieldable_type: string;
		fieldable_id: number;
		created_at: string;
		updated_at: string;
		audits?: AuditedAudit[];
		fieldset?: Fieldset;
	}

	type Order = {
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
		owner?: Ownership;
		company?: Company;
		department?: Department;
		roles?: Role[];
		audits?: AuditedAudit[];
		user?: User;
		vendor?: Vendor;
		person?: Person;
		purchases?: Purchase[];
	}

	type Company = {
		id: number;
		name: string;
		slug: string;
		created_at: string;
		updated_at: string;
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		roles?: Role[];
		audits?: AuditedAudit[];
		users?: User[];
		ownerships?: Ownership[];
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
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
		models?: Model[];
	}

	type Vendor = {
		id: number;
		name?: string | null;
		slug: string;
		url?: string | null;
		created_at: string;
		updated_at: string;
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		owner?: Ownership;
		company?: Company;
		department?: Department;
		audits?: AuditedAudit[];
		contracts?: Contract[];
		items?: Item[];
		accessories?: Accessory[];
		consumables?: Consumable[];
		components?: Component[];
	}

	type Person = {
		id: number;
		first_name?: string | null;
		middle_name?: string | null;
		last_name?: string | null;
		active: boolean;
		employee_number?: string | null;
		job_title?: string | null;
		manager_id?: number | null;
		created_at: string;
		updated_at: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		posessions?: Assignment[];
		items?: Item[];
		accessories?: Accessory[];
		licenses?: License[];
		fieldset_associations?: FieldsetAssociation[];
		audits?: AuditedAudit[];
		manager?: Person;
		user?: User;
	}

	type Consumable = {
		id: number;
		name?: string | null;
		min_qty?: number | null;
		qty?: number | null;
		cost?: number | null;
		cost_currency: string;
		requestable: boolean;
		notes?: string | null;
		model_id: number;
		vendor_id: number;
		default_location_id: number;
		created_at: string;
		updated_at: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		assignments?: Assignment[];
		purchase?: Purchase;
		fieldset_associations?: FieldsetAssociation[];
		audits?: AuditedAudit[];
		model?: Model;
		vendor?: Vendor;
		default_location?: Location;
		category?: Category;
		manufacturer?: Manufacturer;
	}

	type Field = {
		id: number;
		name?: string | null;
		format?: string | null;
		element?: string | null;
		description?: string | null;
		notes?: string | null;
		created_at: string;
		updated_at: string;
		audits?: AuditedAudit[];
	}

	type Ownership = {
		id: number;
		company_id: number;
		department_id?: number | null;
		ownable_type: string;
		ownable_id: number;
		created_at: string;
		updated_at: string;
		audits?: AuditedAudit[];
		company?: Company;
		department?: Department;
	}

	type Address = {
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
		audits?: AuditedAudit[];
		contact?: Contact;
		category?: Category;
	}

	type Phone = {
		id: number;
		number: string;
		extension?: string | null;
		notes?: string | null;
		contact_id: number;
		category_id: number;
		created_at: string;
		updated_at: string;
		audits?: AuditedAudit[];
		contact?: Contact;
		category?: Category;
	}

	type AuditedAudit = {
		id: number;
		auditable_id?: number | null;
		auditable_type?: string | null;
		associated_id?: number | null;
		associated_type?: string | null;
		user_id?: number | null;
		user_type?: string | null;
		username?: string | null;
		action?: string | null;
		audited_changes?: Record<string, any> | null;
		version?: number | null;
		comment?: string | null;
		remote_address?: string | null;
		request_uuid?: string | null;
		created_at?: string | null;
	}


}
