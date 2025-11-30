import dayjs from "dayjs"

export const currency = (amount: number, currency = "USD") => {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
	})
	return formatter.format(amount)
}

export const date = {
	short: (date: string | Date) => dayjs(new Date(date)).format("M/D/YY"),
	long: (date: string | Date) => dayjs(new Date(date)).format("MM/DD/YYYY HH:mm:ss"),
	relative: (date: string | Date) => dayjs(new Date(date)).format("MM/DD/YYYY"),
	english: (date: string | Date) => dayjs(new Date(date)).format("MMMM D, YYYY"),
}

export const datetime = {
	dateShort: (date: string | Date) => dayjs(new Date(date)).format("M/D/YY HH:mm"),
	dateLong: (date: string | Date) => dayjs(new Date(date)).format("MM/DD/YYYY HH:mm:ss"),
	relative: (date: string | Date) => dayjs(new Date(date)).fromNow(),
	english: (date: string | Date) => dayjs(new Date(date)).format("dddd, MMMM D, YYYY h:mm A"),
}
