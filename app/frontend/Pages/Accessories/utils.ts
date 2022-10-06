export const availableToCheckout = (accessory: Schema.Accessory) => {
	if(accessory.qty === null || accessory.qty === undefined || accessory.assignments === undefined) return false

	return accessory.qty - accessory.assignments.length > 0
}
