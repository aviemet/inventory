import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { SegmentedControl } from "@/components/Inputs/SegmentedControl"
import { render } from "@/tests/helpers/utils"

describe("SegmentedControl", () => {
	const options = [
		{ value: "option1", label: "Option 1" },
		{ value: "option2", label: "Option 2" },
	]

	it("renders without error", () => {
		render(<SegmentedControl name="test" options={ options } />)
		const control = screen.getByRole("radiogroup")
		expect(control).toBeInTheDocument()
	})

	it("renders with label when provided", () => {
		render(<SegmentedControl name="test" label="Control" options={ options } />)
		expect(screen.getByText("Control")).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		render(<SegmentedControl name="test" id="control-input" options={ options } />)
		const control = screen.getByRole("radiogroup")
		expect(control).toBeInTheDocument()
	})

	it("renders options", () => {
		render(<SegmentedControl name="test" options={ options } />)
		expect(screen.getByText("Option 1")).toBeInTheDocument()
		expect(screen.getByText("Option 2")).toBeInTheDocument()
	})

	it("handles value prop", () => {
		render(<SegmentedControl name="test" value="option1" options={ options } />)
		const option1 = screen.getByRole("radio", { name: "Option 1" })
		expect(option1).toBeChecked()
	})

	it("handles onChange callback", async() => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		render(<SegmentedControl name="test" options={ options } onChange={ onChange } />)
		const option2 = screen.getByRole("radio", { name: "Option 2" })
		await user.click(option2)
		expect(onChange).toHaveBeenCalled()
	})

	it("handles required prop", () => {
		render(<SegmentedControl name="test" required label="Required Control" options={ options } />)
		expect(screen.getByText("Required Control")).toBeInTheDocument()
	})

	it("handles disabled state", () => {
		render(<SegmentedControl name="test" disabled options={ options } />)
		const option1 = screen.getByRole("radio", { name: "Option 1" })
		expect(option1).toBeDisabled()
	})

	it("handles labelPosition start", () => {
		render(<SegmentedControl name="test" label="Control" labelPosition="start" options={ options } />)
		const labels = screen.getAllByText("Control")
		expect(labels.length).toBeGreaterThan(0)
	})

	it("handles labelPosition end", () => {
		render(<SegmentedControl name="test" label="Control" labelPosition="end" options={ options } />)
		const labels = screen.getAllByText("Control")
		expect(labels.length).toBeGreaterThan(0)
	})

	it("handles wrapper prop", () => {
		render(<SegmentedControl name="test" options={ options } wrapper={ true } />)
		const control = screen.getByRole("radiogroup")
		expect(control).toBeInTheDocument()
	})
})
