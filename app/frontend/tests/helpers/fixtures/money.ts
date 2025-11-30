import { type Money } from "@/types"

export const baseMoneyFixture: Money = {
	amount: 100,
	cents: 10000,
	currency_iso: "USD",
}

export const createMoneyFixture = (overrides?: Partial<Money>): Money => {
	return {
		...baseMoneyFixture,
		...overrides,
	}
}

export const zeroMoneyFixture: Money = {
	amount: 0,
	cents: 0,
	currency_iso: "USD",
}

export const negativeMoneyFixture: Money = {
	amount: - 50,
	cents: - 5000,
	currency_iso: "USD",
}
