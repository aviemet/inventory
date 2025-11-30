export const baseSchemaMoneyFixture: Schema.Money = {
	fractional: 10000,
	currency: "USD",
}

export const createSchemaMoneyFixture = (overrides?: Partial<Schema.Money>): Schema.Money => ({
	...baseSchemaMoneyFixture,
	...overrides,
})

export const zeroSchemaMoneyFixture: Schema.Money = {
	fractional: 0,
	currency: "USD",
}
