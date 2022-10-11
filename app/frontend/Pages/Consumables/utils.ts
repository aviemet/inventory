export const availableToCheckout = (consumable: Schema.Component) => {
	if(consumable.qty === null || consumable.qty === undefined || consumable.assignments === undefined) return false

	return consumable.qty - consumable.assignments.length > 0
}
