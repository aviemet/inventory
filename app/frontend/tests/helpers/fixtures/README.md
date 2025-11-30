# Test Fixtures

Test fixtures centralize mock data, making tests more maintainable and reducing duplication of complex schema objects.

## Pattern

Each fixture file exports:

1. **Base fixture** - A complete, default mock object
2. **Factory function** - `createXFixture(overrides?)` to customize for specific tests
3. **Variant fixtures** - Pre-configured variants (e.g., `minimalXFixture`)

## Example Usage

```typescript
import { baseAddressFixture, createAddressFixture, minimalAddressFixture } from "@/tests/helpers/fixtures/address"

// Use base fixture as-is
render(<AddressFormatter address={baseAddressFixture} />)

// Create custom variant with overrides
const addressWithApt = createAddressFixture({ address_2: "Apt 4B" })

// Use pre-configured minimal variant
render(<AddressFormatter address={minimalAddressFixture} />)
```

## Benefits

- **Single source of truth** - Schema changes only need updates in one place
- **Type safety** - TypeScript ensures fixtures match schema definitions
- **Flexibility** - Factory functions allow easy customization per test
- **Readability** - Tests focus on behavior, not mock object construction

## Creating New Fixtures

1. Create a new file in `app/frontend/tests/helpers/fixtures/`
2. Export base fixture, factory function, and any variants
3. Export from `index.ts` for convenient imports
4. Use in tests instead of inline mock objects
