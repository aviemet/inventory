import { createOrdersBasicFixture } from "./ordersBasic"
import { createPurchasableFixture } from "./purchasable"
import { createSchemaMoneyFixture } from "./schemaMoney"

export const basePurchasesBasicFixture: Schema.PurchasesBasic = {
	id: 1,
	cost: createSchemaMoneyFixture(),
	cost_currency: "USD",
	purchasable_id: 1,
	purchasable_type: "Item",
	purchasable: createPurchasableFixture(),
	order: createOrdersBasicFixture(),
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createPurchasesBasicFixture = (overrides?: Partial<Schema.PurchasesBasic>): Schema.PurchasesBasic => ({
	...basePurchasesBasicFixture,
	...overrides,
})
