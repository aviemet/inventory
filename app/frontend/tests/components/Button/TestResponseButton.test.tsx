import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import axios from "axios"
import { describe, expect, it, vi, beforeEach } from "vitest"

import { TestResponseButton } from "@/components/Button"
import { render } from "@/tests/helpers/utils"

vi.mock("axios")
const mockedAxios = vi.mocked(axios)

vi.mock("@xstate/react", async() => {
	const actual = await vi.importActual("@xstate/react")
	return {
		...actual,
		useMachine: vi.fn(() => [
			{ value: "inactive", context: { icon: null, color: "blue" } },
			vi.fn(),
		]),
	}
})

describe("TestResponseButton", () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it("renders without error", () => {
		render(<TestResponseButton endpoint="/test" />)
		expect(screen.getByRole("button")).toBeInTheDocument()
	})

	it("renders with custom text", () => {
		render(<TestResponseButton endpoint="/test">Test Connection</TestResponseButton>)
		expect(screen.getByText("Test Connection")).toBeInTheDocument()
	})

	it("renders with default text when no children provided", () => {
		render(<TestResponseButton endpoint="/test" />)
		expect(screen.getByText("Test")).toBeInTheDocument()
	})

	it("handles click event", async() => {
		const user = userEvent.setup()
		mockedAxios.request = vi.fn().mockResolvedValue({ data: { success: true } })
		render(<TestResponseButton endpoint="/test" />)
		const button = screen.getByRole("button")
		await user.click(button)
		expect(mockedAxios.request).toHaveBeenCalled()
	})
})
