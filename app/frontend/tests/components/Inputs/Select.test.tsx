import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi, beforeEach } from "vitest"

import { SelectInput } from "@/components/Inputs/Select"
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

describe("Select", () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it("renders without error", () => {
		render(<SelectInput name="test" options={ [] } />)
		const select = screen.getByRole("textbox")
		expect(select).toBeInTheDocument()
	})

	it("renders with label when provided", () => {
		render(<SelectInput name="test" label="Test Label" options={ [] } />)
		expect(screen.getByText("Test Label")).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		render(<SelectInput name="test" id="test-select" options={ [] } />)
		const select = screen.getByRole("textbox")
		expect(select).toHaveAttribute("id", "test-select-search")
	})

	it("uses name as id when id is not provided", () => {
		render(<SelectInput name="test-select" options={ [] } />)
		const select = screen.getByRole("textbox")
		expect(select).toHaveAttribute("id", "test-select-search")
	})

	it("renders options", async() => {
		const user = userEvent.setup()
		const options = [
			{ value: "1", label: "Option 1" },
			{ value: "2", label: "Option 2" },
		]
		render(<SelectInput name="test" options={ options } />)
		const select = screen.getByRole("textbox")
		await user.click(select)
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
		render(<SelectInput name="test" options={ options } onChange={ onChange } />)
		const select = screen.getByRole("textbox")
		await user.click(select)
		await waitFor(() => {
			expect(screen.getByText("Option 1")).toBeInTheDocument()
		})
		await user.click(screen.getByText("Option 1"))
		expect(onChange).toHaveBeenCalled()
	})

	it("handles required prop", () => {
		render(<SelectInput name="test" required label="Required Field" options={ [] } />)
		expect(screen.getByText("Required Field")).toBeInTheDocument()
	})

	it("handles disabled state", () => {
		render(<SelectInput name="test" disabled options={ [] } />)
		const select = screen.getByRole("textbox")
		expect(select).toBeDisabled()
	})

	it("has autoComplete off", () => {
		render(<SelectInput name="test" options={ [] } />)
		const select = screen.getByRole("textbox")
		expect(select).toHaveAttribute("autocomplete", "off")
	})

	it("calls router.reload when fetchOnOpen is provided", async() => {
		const { router } = await import("@inertiajs/react")
		const user = userEvent.setup()
		render(<SelectInput name="test" options={ [] } fetchOnOpen="data" />)
		const select = screen.getByRole("textbox")
		await user.click(select)
		await waitFor(() => {
			expect(vi.mocked(router.reload)).toHaveBeenCalledWith({ only: ["data"] })
		})
	})

	it("handles onDropdownOpen callback", async() => {
		const user = userEvent.setup()
		const onDropdownOpen = vi.fn()
		render(<SelectInput name="test" options={ [] } onDropdownOpen={ onDropdownOpen } />)
		const select = screen.getByRole("textbox")
		await user.click(select)
		await waitFor(() => {
			expect(onDropdownOpen).toHaveBeenCalled()
		})
	})

	it("handles wrapper prop", () => {
		render(<SelectInput name="test" options={ [] } wrapper={ true } wrapperProps={ { "data-testid": "wrapper" } } />)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})

	it("handles default maxDropdownHeight", () => {
		render(<SelectInput name="test" options={ [] } />)
		const select = screen.getByRole("textbox")
		expect(select).toBeInTheDocument()
	})

	it("handles custom maxDropdownHeight", () => {
		render(<SelectInput name="test" options={ [] } maxDropdownHeight={ 300 } />)
		const select = screen.getByRole("textbox")
		expect(select).toBeInTheDocument()
	})
})

