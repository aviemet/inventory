declare namespace schema {
	interface User {
		id: number;
		email: string;
		encryptedPassword: string;
		resetPasswordToken?: string | null;
		resetPasswordSentAt?: string | null;
		rememberCreatedAt?: string | null;
		signInCount: number;
		currentSignInAt?: string | null;
		lastSignInAt?: string | null;
		currentSignInIp?: string | null;
		lastSignInIp?: string | null;
		confirmationToken?: string | null;
		confirmedAt?: string | null;
		confirmationSentAt?: string | null;
		unconfirmedEmail?: string | null;
		failedAttempts: number;
		unlockToken?: string | null;
		lockedAt?: string | null;
		createdAt: string;
		updatedAt: string;
		personId: number;
		activeCompanyId?: number | null;
		active?: boolean | null;
		tablePreferences?: Record<string, any> | null;
		userPreferences?: Record<string, any> | null;
		roles?: Role[];
		audits?: AuditedAudit[];
		person?: Person;
		activeCompany?: Company;
		companies?: Company[];
	}

	interface Accessory {
		id: number;
		name?: string | null;
		serial?: string | null;
		minQty?: number | null;
		qty?: number | null;
		costCents?: number | null;
		costCurrency: string;
		requestable: boolean;
		notes?: string | null;
		modelId: number;
		vendorId?: number | null;
		defaultLocationId?: number | null;
		createdAt: string;
		updatedAt: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		assignments?: Assignment[];
		purchase?: Purchase;
		fieldsetAssociations?: FieldsetAssociation[];
		roles?: Role[];
		audits?: AuditedAudit[];
		model?: Model;
		vendor?: Vendor;
		defaultLocation?: Location;
		category?: Category;
		manufacturer?: Manufacturer;
	}

	interface Address {
		id: number;
		address: string;
		address2?: string | null;
		city?: string | null;
		region?: string | null;
		country?: string | null;
		postal?: string | null;
		notes?: string | null;
		contactId: number;
		categoryId: number;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
		contact?: Contact;
		category?: Category;
	}

	interface Assignment {
		id: number;
		assignableType: string;
		assignableId: number;
		assignToableType: string;
		assignToableId: number;
		qty?: number | null;
		status?: 'requested' | 'approved' | 'denied' | null;
		assignedAt?: string | null;
		returnedAt?: string | null;
		expectedAt?: string | null;
		notes?: string | null;
		active: boolean;
		createdById?: number | null;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
		createdBy?: User;
	}

	interface Category {
		id: number;
		categorizableType: string;
		name?: string | null;
		slug: string;
		description?: string | null;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
	}

	interface Company {
		id: number;
		name?: string | null;
		slug: string;
		createdAt: string;
		updatedAt: string;
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
	}

	interface Component {
		id: number;
		name?: string | null;
		serial?: string | null;
		minQty?: number | null;
		qty?: number | null;
		costCents?: number | null;
		costCurrency: string;
		purchasedAt?: string | null;
		notes?: string | null;
		modelId: number;
		vendorId: number;
		defaultLocationId?: number | null;
		createdAt: string;
		updatedAt: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		assignments?: Assignment[];
		purchase?: Purchase;
		fieldsetAssociations?: FieldsetAssociation[];
		audits?: AuditedAudit[];
		model?: Model;
		vendor?: Vendor;
		defaultLocation?: Location;
		category?: Category;
		manufacturer?: Manufacturer;
	}

	interface Consumable {
		id: number;
		name?: string | null;
		minQty?: number | null;
		qty?: number | null;
		costCents?: number | null;
		costCurrency: string;
		requestable: boolean;
		notes?: string | null;
		modelId: number;
		vendorId: number;
		defaultLocationId: number;
		createdAt: string;
		updatedAt: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		assignments?: Assignment[];
		purchase?: Purchase;
		fieldsetAssociations?: FieldsetAssociation[];
		audits?: AuditedAudit[];
		model?: Model;
		vendor?: Vendor;
		defaultLocation?: Location;
		category?: Category;
		manufacturer?: Manufacturer;
	}

	interface Contact {
		id: number;
		notes?: string | null;
		contactableType?: string | null;
		contactableId?: number | null;
		createdAt: string;
		updatedAt: string;
		primaryAddressId?: number | null;
		primaryPhoneId?: number | null;
		primaryEmailId?: number | null;
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
		beginsAt?: string | null;
		endsAt?: string | null;
		vendorId: number;
		categoryId: number;
		createdAt: string;
		updatedAt: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		roles?: Role[];
		audits?: AuditedAudit[];
		category?: Category;
		vendor?: Vendor;
	}

	interface Department {
		id: number;
		name?: string | null;
		slug: string;
		locationId?: number | null;
		createdAt: string;
		updatedAt: string;
		managerId?: number | null;
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

	interface Email {
		id: number;
		email?: string | null;
		notes?: string | null;
		contactId: number;
		categoryId: number;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
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
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
	}

	interface Fieldset {
		id: number;
		name?: string | null;
		description?: string | null;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
	}

	interface FieldsetAssociation {
		id: number;
		fieldsetId: number;
		fieldableType: string;
		fieldableId: number;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
		fieldset?: Fieldset;
	}

	interface IpLease {
		id: number;
		nicId: number;
		address?: string | null;
		active: boolean;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
		nic?: Nic;
		item?: Item;
	}

	interface Item {
		id: number;
		name?: string | null;
		assetTag?: string | null;
		serial?: string | null;
		costCents?: number | null;
		costCurrency: string;
		purchasedAt?: string | null;
		requestable: boolean;
		notes?: string | null;
		modelId: number;
		vendorId?: number | null;
		defaultLocationId?: number | null;
		createdAt: string;
		updatedAt: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		assignments?: Assignment[];
		posessions?: Assignment[];
		items?: Item[];
		accessories?: Accessory[];
		licenses?: License[];
		purchase?: Purchase;
		fieldsetAssociations?: FieldsetAssociation[];
		roles?: Role[];
		audits?: AuditedAudit[];
		nics?: Nic[];
		ips?: IpLease[];
		ipLeases?: IpLease[];
		model?: Model;
		vendor?: Vendor;
		defaultLocation?: Location;
		category?: Category;
		manufacturer?: Manufacturer;
		warranty?: Warranty;
	}

	interface License {
		id: number;
		name?: string | null;
		seats?: number | null;
		key?: string | null;
		licenserName?: string | null;
		licenserEmail?: string | null;
		reassignable: boolean;
		costCents?: number | null;
		costCurrency: string;
		purchasedAt?: string | null;
		expiresAt?: string | null;
		terminatesAt?: string | null;
		maintained: boolean;
		notes?: string | null;
		categoryId: number;
		vendorId?: number | null;
		manufacturerId: number;
		createdAt: string;
		updatedAt: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		assignments?: Assignment[];
		purchase?: Purchase;
		fieldsetAssociations?: FieldsetAssociation[];
		roles?: Role[];
		audits?: AuditedAudit[];
		category?: Category;
		vendor?: Vendor;
		manufacturer?: Manufacturer;
	}

	interface Location {
		id: number;
		name?: string | null;
		slug: string;
		parentId?: number | null;
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

	interface Manufacturer {
		id: number;
		name?: string | null;
		slug: string;
		createdAt: string;
		updatedAt: string;
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

	interface Model {
		id: number;
		name?: string | null;
		slug: string;
		modelNumber?: string | null;
		notes?: string | null;
		categoryId: number;
		manufacturerId: number;
		createdAt: string;
		updatedAt: string;
		fieldsetAssociations?: FieldsetAssociation[];
		audits?: AuditedAudit[];
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
		dhcpStart?: string | null;
		dhcpEnd?: string | null;
		vlanId?: number | null;
		createdAt: string;
		updatedAt: string;
		owner?: Ownership;
		company?: Company;
		department?: Department;
		audits?: AuditedAudit[];
	}

	interface Nic {
		id: number;
		mac?: string | null;
		nicType: 'ethernet' | 'wifi' | 'fiber';
		itemId: number;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
		item?: Item;
		ips?: IpLease[];
		ipLeases?: IpLease[];
	}

	interface Order {
		id: number;
		number?: string | null;
		userId: number;
		notes?: string | null;
		submittedAt?: string | null;
		orderedAt?: string | null;
		expectedAt?: string | null;
		deliveredAt?: string | null;
		canceledAt?: string | null;
		returnedAt?: string | null;
		discountDecription?: string | null;
		returnedReason?: string | null;
		canceledReason?: string | null;
		shippingCents?: number | null;
		shippingCurrency: string;
		taxCents?: number | null;
		taxCurrency: string;
		discountCents?: number | null;
		discountCurrency: string;
		vendorId: number;
		createdAt: string;
		updatedAt: string;
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

	interface Ownership {
		id: number;
		companyId: number;
		departmentId?: number | null;
		ownableType: string;
		ownableId: number;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
		company?: Company;
		department?: Department;
	}

	interface Person {
		id: number;
		firstName?: string | null;
		middleName?: string | null;
		lastName?: string | null;
		active: boolean;
		employeeNumber?: string | null;
		jobTitle?: string | null;
		managerId?: number | null;
		createdAt: string;
		updatedAt: string;
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
		fieldsetAssociations?: FieldsetAssociation[];
		audits?: AuditedAudit[];
		manager?: Person;
		user?: User;
	}

	interface Phone {
		id: number;
		number: string;
		extension?: string | null;
		notes?: string | null;
		contactId: number;
		categoryId: number;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
		contact?: Contact;
		category?: Category;
	}

	interface Purchase {
		id: number;
		purchasableType: string;
		purchasableId: number;
		orderId?: number | null;
		costCents: number;
		costCurrency: string;
		qty?: number | null;
		notes?: string | null;
		createdAt: string;
		updatedAt: string;
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

	interface Role {
		id: number;
		name?: string | null;
		resourceType?: string | null;
		resourceId?: number | null;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
		users?: User[];
	}

	interface StatusType {
		id: number;
		name?: string | null;
		slug: string;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
	}

	interface Vendor {
		id: number;
		name?: string | null;
		slug: string;
		url?: string | null;
		createdAt: string;
		updatedAt: string;
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

	interface Warranty {
		id: number;
		itemId: number;
		length?: number | null;
		notes?: string | null;
		createdAt: string;
		updatedAt: string;
		contact?: Contact;
		addresses?: Address[];
		phones?: Phone[];
		emails?: Email[];
		websites?: Website[];
		audits?: AuditedAudit[];
		item?: Item;
	}

	interface Website {
		id: number;
		url?: string | null;
		name?: string | null;
		notes?: string | null;
		contactId: number;
		createdAt: string;
		updatedAt: string;
		audits?: AuditedAudit[];
	}

	interface AuditedAudit {
		id: number;
		auditableId?: number | null;
		auditableType?: string | null;
		associatedId?: number | null;
		associatedType?: string | null;
		userId?: number | null;
		userType?: string | null;
		username?: string | null;
		action?: string | null;
		auditedChanges?: Record<string, any> | null;
		version?: number | null;
		comment?: string | null;
		remoteAddress?: string | null;
		requestUuid?: string | null;
		createdAt?: string | null;
	}


}
