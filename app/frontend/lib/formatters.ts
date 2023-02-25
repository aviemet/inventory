import dayjs from 'dayjs'

export const currency = (amount: number, currency = 'USD') => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	})
	return formatter.format(amount)
}

export const date = {
	short: (date: string) => dayjs(new Date(date)).format('MM/DD/YYYY'),
	long: (date: string) => dayjs(new Date(date)).format('MM/DD/YYYY HH:mm:ss'),
	relative: (date: string) => {
		return dayjs(new Date(date)).format('MM/DD/YYYY')
	},
	english: (date: string) => dayjs(new Date(date)).format('MM/DD/YYYY'),
}
