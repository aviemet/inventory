export const createMockNetworkShow = (overrides?: Partial<Schema.NetworksShow>): Schema.NetworksShow => ({
	id: 1,
	address: '192.168.1.0/24',
	broadcast: '192.168.1.255',
	created_at: new Date().toISOString(),
	dhcp_end: '192.168.1.200',
	dhcp_start: '192.168.1.100',
	gateway: '192.168.1.1',
	hosts: ['192.168.1.1', '192.168.1.2', '192.168.1.3'],
	name: 'Test Network',
	page: 1,
	updated_at: new Date().toISOString(),
	vlan_id: 100,
	...overrides,
})

export const createMockIpLeaseBasic = (overrides?: Partial<Schema.IpLeasesBasic>): Schema.IpLeasesBasic => ({
	id: 1,
	active: true,
	address: '192.168.1.10',
	created_at: new Date().toISOString(),
	item: {
		id: 1,
		name: 'Test Item',
	},
	updated_at: new Date().toISOString(),
	...overrides,
})

export const createMockIpLeaseShow = (overrides?: Partial<Schema.IpLeasesShow>): Schema.IpLeasesShow => ({
	id: 1,
	active: true,
	address: '192.168.1.10',
	created_at: new Date().toISOString(),
	item: {
		id: 1,
		name: 'Test Item',
	},
	nic: {
		id: 1,
		item_id: 1,
		nic_type: 'ethernet',
	},
	updated_at: new Date().toISOString(),
	...overrides,
})

export const createMockPagination = (overrides?: Partial<Schema.Pagination>): Schema.Pagination => ({
	count: 10,
	pages: 1,
	limit: 25,
	current_page: 1,
	next_page: 1,
	prev_page: 1,
	is_first_page: true,
	is_last_page: true,
	...overrides,
})

export const createMockNetworkIndex = (overrides?: Partial<Schema.NetworksIndex>): Schema.NetworksIndex => ({
	id: 1,
	address: '192.168.1.0/24',
	broadcast: '192.168.1.255',
	created_at: new Date().toISOString(),
	dhcp_end: '192.168.1.200',
	dhcp_start: '192.168.1.100',
	gateway: '192.168.1.1',
	name: 'Test Network',
	updated_at: new Date().toISOString(),
	vlan_id: 100,
	...overrides,
})

export const createMockNetworkFormData = (overrides?: Partial<Schema.NetworksFormData>): Schema.NetworksFormData => ({
	address: '192.168.1.0/24',
	dhcp_end: '192.168.1.200',
	dhcp_start: '192.168.1.100',
	gateway: '192.168.1.1',
	name: 'Test Network',
	...overrides,
})

export const createMockNetworkEdit = (overrides?: Partial<Schema.NetworksEdit>): Schema.NetworksEdit => ({
	id: 1,
	address: '192.168.1.0/24',
	broadcast: '192.168.1.255',
	dhcp_end: '192.168.1.200',
	dhcp_start: '192.168.1.100',
	gateway: '192.168.1.1',
	name: 'Test Network',
	vlan_id: 100,
	...overrides,
})
