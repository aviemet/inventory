import { http, HttpResponse } from "msw"

import { Routes } from "@/lib"

export const mockSearchResults = [
	{
		id: 26,
		label: "iPhone 4",
		content: "iPhone 4 4WE3GN55 4WE3GN55",
		searchable_type: "Asset",
		searchable_id: 1,
		created_at: "2024-05-21T13:16:56.311-07:00",
		updated_at: "2024-05-21T13:16:56.311-07:00",
	},
	{
		id: 27,
		label: "iPhone 6S / 6S Plus",
		content: "iPhone 6S / 6S Plus 6FL77GXM 6FL77GXM",
		searchable_type: "Asset",
		searchable_id: 2,
		created_at: "2024-05-21T13:16:56.323-07:00",
		updated_at: "2024-05-21T13:16:56.323-07:00",
	},
]

export const mockCurrencies: Schema.CurrencyOption[] = [
	{ code: "USD", symbol: "$" },
	{ code: "EUR", symbol: "€" },
	{ code: "GBP", symbol: "£" },
]

export const handlers = [
	http.get(`${Routes.apiSearches()}*`, () => {
		return HttpResponse.json(mockSearchResults)
	}),
	http.get(`${Routes.apiCurrencies()}*`, () => {
		return HttpResponse.json(mockCurrencies)
	}),
	http.post("http://localhost:3000/test/login*", () => {
		return HttpResponse.json({ success: true })
	}),
	http.all("http://localhost:3000/*", ({ request }) => {
		console.warn(`Unhandled request: ${request.method} ${request.url}`)
		return HttpResponse.json({}, { status: 200 })
	}),
]
