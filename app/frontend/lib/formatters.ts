import { format } from 'date-fns'

export const currency = (amount: number, currency = 'USD') => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency
	})
	return formatter.format(amount)
}

export const date = {
	short: (date: string) => format(new Date(date), 'MM/dd/yy'),
	long: (date: string) => format(new Date(date), 'MM/dd/yy HH:mm:ss'),
	relative: (date: string) => {
		return format(new Date(date), 'MM/dd/yy')
	},
	english: (date: string) => format(new Date(date), 'MM/dd/yy'),
}
