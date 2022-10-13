export const availableToCheckout = (consumable: Schema.Consumable) => {
	if(consumable.qty === null || consumable.qty === undefined || consumable.assignments === undefined) return false

	return consumable.qty > 0
}
