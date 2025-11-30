import { createSchemaMoneyFixture } from "./schemaMoney"
import { createVendorsOptionsFixture } from "./vendorsOptions"

export const baseOrdersBasicFixture: Schema.OrdersBasic = {
	id: 1,
	user_id: 1,
	vendor_id: 1,
	vendor: createVendorsOptionsFixture(),
	cost: createSchemaMoneyFixture(),
	discount_cost: createSchemaMoneyFixture(),
	shipping_cost: createSchemaMoneyFixture(),
	tax_cost: createSchemaMoneyFixture(),
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createOrdersBasicFixture = (overrides?: Partial<Schema.OrdersBasic>): Schema.OrdersBasic => ({
	...baseOrdersBasicFixture,
	...overrides,
})
