export const availableToCheckout = (component: Schema.Component) => {
	if(component.qty === null || component.qty === undefined || component.assignments === undefined) return false

	return component.qty - component.assignments.length > 0
}
