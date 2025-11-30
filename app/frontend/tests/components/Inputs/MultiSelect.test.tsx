import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi, beforeEach } from "vitest"

import { MultiSelectInput } from "@/components/Inputs/MultiSelect"
import { render } from "@/tests/helpers/utils"

vi.mock("@inertiajs/react", async() => {
	const actual = await vi.importActual("@inertiajs/react")
	const { mockRouter, mockInertiaHead, mockInertiaLink } = await import("@/tests/helpers/setup")
	const { baseMockPageProps } = await import("@/tests/helpers/setup")
	return {
		...actual,
		usePage: () => ({
			component: undefined,
			props: baseMockPageProps,
			url: "/",
			version: null,
		}),
		router: mockRouter,
		Link: mockInertiaLink,
		Head: mockInertiaHead,
	}
})

describe("MultiSelect", () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it("renders without error", () => {
		render(<MultiSelectInput name="test" options={ [] } />)
		const input = screen.getByRole("textbox")
		expect(input).toBeInTheDocument()
	})

	it("renders with label when provided", () => {
		render(<MultiSelectInput name="test" label="Test Label" options={ [] } />)
		expect(screen.getByText("Test Label")).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		render(<MultiSelectInput name="test" id="multiselect-input" options={ [] } />)
		const input = screen.getByRole("textbox")
		expect(input).toHaveAttribute("id", "multiselect-input-search")
	})

	it("uses name as id when id is not provided", () => {
		render(<MultiSelectInput name="test-multiselect" options={ [] } />)
		const input = screen.getByRole("textbox")
		expect(input).toHaveAttribute("id", "test-multiselect-search")
	})

	it("renders options", async() => {
		const user = userEvent.setup()
		const options = [
			{ value: "1", label: "Option 1" },
			{ value: "2", label: "Option 2" },
		]
		render(<MultiSelectInput name="test" options={ options } />)
		const input = screen.getByRole("textbox")
		await user.click(input)
		await waitFor(() => {
			expect(screen.getByText("Option 1")).toBeInTheDocument()
			expect(screen.getByText("Option 2")).toBeInTheDocument()
		})
	})

	it("handles onChange callback", async() => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		const options = [
			{ value: "1", label: "Option 1" },
		]
		render(<MultiSelectInput name="test" options={ options } onChange={ onChange } />)
		const input = screen.getByRole("textbox")
		await user.click(input)
		await waitFor(() => {
			expect(screen.getByText("Option 1")).toBeInTheDocument()
		})
		await user.click(screen.getByText("Option 1"))
		expect(onChange).toHaveBeenCalled()
	})

	it("handles required prop", () => {
		render(<MultiSelectInput name="test" required label="Required Field" options={ [] } />)
		expect(screen.getByText("Required Field")).toBeInTheDocument()
	})

	it("handles disabled state", () => {
		render(<MultiSelectInput name="test" disabled options={ [] } />)
		const input = screen.getByRole("textbox")
		expect(input).toBeDisabled()
	})

	it("has autoComplete off", () => {
		render(<MultiSelectInput name="test" options={ [] } />)
		const input = screen.getByRole("textbox")
		expect(input).toHaveAttribute("autocomplete", "off")
	})

	it("calls router.reload when fetchOnOpen is provided", async() => {
		const { router } = await import("@inertiajs/react")
		const user = userEvent.setup()
		render(<MultiSelectInput name="test" options={ [] } fetchOnOpen="data" />)
		const input = screen.getByRole("textbox")
		await user.click(input)
		await waitFor(() => {
			expect(vi.mocked(router.reload)).toHaveBeenCalledWith({ only: ["data"] })
		})
	})

	it("handles onDropdownOpen callback", async() => {
		const user = userEvent.setup()
		const onDropdownOpen = vi.fn()
		render(<MultiSelectInput name="test" options={ [] } onDropdownOpen={ onDropdownOpen } />)
		const input = screen.getByRole("textbox")
		await user.click(input)
		await waitFor(() => {
			expect(onDropdownOpen).toHaveBeenCalled()
		})
	})

	it("handles wrapper prop", () => {
		render(<MultiSelectInput name="test" options={ [] } wrapper={ true } wrapperProps={ { "data-testid": "wrapper" } } />)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})
})
