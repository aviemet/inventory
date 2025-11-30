import { showNotification } from "@mantine/notifications"
import { waitFor } from "@testing-library/react"
import { describe, expect, it, vi, beforeEach } from "vitest"

import { Flash } from "@/components"
import { mockUsePage } from "@/tests/helpers/mocks"
import { render } from "@/tests/helpers/utils"

vi.mock("@mantine/notifications", async() => {
	const actual = await vi.importActual("@mantine/notifications")
	return {
		...actual,
		showNotification: vi.fn(),
	}
})

vi.mock("@inertiajs/react", async() => {
	const actual = await vi.importActual("@inertiajs/react")
	const { mockRouter, mockInertiaLink, mockInertiaHead } = await import("@/tests/helpers/setup")
	return {
		...actual,
		usePage: vi.fn(),
		router: mockRouter,
		Link: mockInertiaLink,
		Head: mockInertiaHead,
	}
})

describe("Flash", () => {
	beforeEach(() => {
		vi.clearAllMocks()
		mockUsePage({})
	})

	it("renders without error", () => {
		const { container } = render(<Flash />)
		expect(container.querySelector("nav, div, span")).toBeNull()
	})

	it("shows alert notification when flash.alert is present", async() => {
		mockUsePage({ alert: "Alert message" })
		render(<Flash />)
		await waitFor(() => {
			expect(vi.mocked(showNotification)).toHaveBeenCalledWith({
				message: "Alert message",
				color: "red",
			})
		})
	})

	it("shows success notification when flash.success is present", async() => {
		mockUsePage({ success: "Success message" })
		render(<Flash />)
		await waitFor(() => {
			expect(vi.mocked(showNotification)).toHaveBeenCalledWith({
				message: "Success message",
				color: "green",
			})
		})
	})

	it("shows info notification when flash.info is present", async() => {
		mockUsePage({ info: "Info message" })
		render(<Flash />)
		await waitFor(() => {
			expect(vi.mocked(showNotification)).toHaveBeenCalledWith({
				message: "Info message",
				color: "blue",
			})
		})
	})

	it("shows warning notification when flash.warning is present", async() => {
		mockUsePage({ warning: "Warning message" })
		render(<Flash />)
		await waitFor(() => {
			expect(vi.mocked(showNotification)).toHaveBeenCalledWith({
				message: "Warning message",
				color: "yellow",
			})
		})
	})

	it("does not show notification when flash is empty", () => {
		render(<Flash />)
		expect(vi.mocked(showNotification)).not.toHaveBeenCalled()
	})

	it("handles multiple flash messages", async() => {
		mockUsePage({
			success: "Success message",
			alert: "Alert message",
		})
		render(<Flash />)
		await waitFor(() => {
			expect(vi.mocked(showNotification)).toHaveBeenCalledTimes(2)
			expect(vi.mocked(showNotification)).toHaveBeenCalledWith({
				message: "Success message",
				color: "green",
			})
			expect(vi.mocked(showNotification)).toHaveBeenCalledWith({
				message: "Alert message",
				color: "red",
			})
		})
	})

	it("does not show notification for falsy flash values", () => {
		mockUsePage({ alert: "" })
		render(<Flash />)
		expect(vi.mocked(showNotification)).not.toHaveBeenCalled()
	})
})
