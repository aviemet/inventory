export const emptyGroup: Schema.PersonGroupsFormData = {
	name: "",
	description: "",
	permissions: {
		company: {
			admin: false,
		},
		item:         { index: true, show: true, create: false, update: false, delete: false, checkout: true, checkin: true },
		accessory:    { index: true, show: true, create: false, update: false, delete: false, checkout: true, checkin: true },
		component:    { index: true, show: true, create: false, update: false, delete: false, checkout: true, checkin: true },
		consumable:   { index: true, show: true, create: false, update: false, delete: false, checkout: true },
		license:      { index: true, show: true, create: false, update: false, delete: false, checkout: true, checkin: true },
		network:      { index: true, show: true, create: false, update: false, delete: false },
		vendor:       { index: true, show: true, create: false, update: false, delete: false },
		contract:     { index: true, show: true, create: false, update: false, delete: false },
		category:     { index: true, show: true, create: false, update: false, delete: false },
		model:        { index: true, show: true, create: false, update: false, delete: false },
		manufacturer: { index: true, show: true, create: false, update: false, delete: false },
		department:   { index: true, show: true, create: false, update: false, delete: false },
		location:     { index: true, show: true, create: false, update: false, delete: false },
		person:       { index: true, show: true, create: false, update: false, delete: false },
		user:         { index: true, show: true, create: false, update: false, delete: false },
	},
}
