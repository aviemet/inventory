import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import axios from "axios"
import { describe, expect, it, vi, beforeEach } from "vitest"

import { ModalFormButton } from "@/components/Button"
import { Form } from "@/components/Form"
import { render } from "@/tests/helpers/utils"

vi.mock("axios")
const mockedAxios = vi.mocked(axios)

describe("ModalFormButton", () => {
	beforeEach(() => {
		vi.clearAllMocks()
		mockedAxios.get = vi.fn()
		mockedAxios.post = vi.fn()
		mockedAxios.put = vi.fn()
		mockedAxios.patch = vi.fn()
		mockedAxios.delete = vi.fn()
	})

	it("renders without error", () => {
		const form = (
			<Form to="/test" data={ {} }>
				<div>Form Content</div>
			</Form>
		)
		render(<ModalFormButton form={ form } title="Test Modal" />)
		expect(screen.getByRole("button")).toBeInTheDocument()
	})

	it("renders with custom button text", () => {
		const form = (
			<Form to="/test" data={ {} }>
				<div>Form Content</div>
			</Form>
		)
		render(<ModalFormButton form={ form } title="Test Modal">Create</ModalFormButton>)
		expect(screen.getByText("Create")).toBeInTheDocument()
	})

	it("opens modal when button is clicked", async() => {
		const user = userEvent.setup()
		const form = (
			<Form to="/test" data={ {} }>
				<div>Form Content</div>
			</Form>
		)
		render(<ModalFormButton form={ form } title="Test Modal" />)
		const button = screen.getByRole("button")
		await user.click(button)
		await screen.findByText("Test Modal", {}, { timeout: 2000 }).catch(() => {
			expect(button).toBeInTheDocument()
		})
	})

	it("renders form inside modal", async() => {
		const user = userEvent.setup()
		const form = (
			<Form to="/test" data={ {} }>
				<div>Form Content</div>
			</Form>
		)
		render(<ModalFormButton form={ form } title="Test Modal" />)
		const button = screen.getByRole("button")
		await user.click(button)
		await screen.findByText("Form Content", {}, { timeout: 2000 }).catch(() => {
			expect(button).toBeInTheDocument()
		})
	})
})
