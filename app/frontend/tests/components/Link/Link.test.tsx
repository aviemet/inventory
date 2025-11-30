import { type Visit } from "@inertiajs/core"
import { fireEvent, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi, beforeEach } from "vitest"

import { Link } from "@/components/Link"
import { render } from "@/tests/helpers/utils"

describe("Link", () => {
	beforeEach(() => {
		vi.clearAllMocks()
		window.location.href = "http://localhost:3000"
		Object.defineProperty(window, "location", {
			writable: true,
			value: {
				href: "http://localhost:3000",
				hostname: "localhost",
			},
		})
	})

	it("renders without error", () => {
		render(<Link href="/test">Link Text</Link>)
		expect(screen.getByText("Link Text")).toBeInTheDocument()
	})

	it("renders internal link by default", () => {
		render(<Link href="/internal">Internal</Link>)
		const link = screen.getByRole("link", { name: "Internal" })
		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute("href", "/internal")
	})

	it("renders external link when external prop is true", () => {
		render(<Link href="https://example.com" external>External</Link>)
		const link = screen.getByRole("link", { name: "External" })
		expect(link).toHaveAttribute("target", "_blank")
		expect(link).toHaveAttribute("rel", "noreferrer")
		const icon = link.querySelector(".external")
		expect(icon).toBeInTheDocument()
	})

	it("detects external link from http prefix", () => {
		render(<Link href="http://external.com">External</Link>)
		const link = screen.getByRole("link", { name: "External" })
		expect(link).toHaveAttribute("target", "_blank")
		expect(link).toHaveAttribute("rel", "noreferrer")
		const icon = link.querySelector(".external")
		expect(icon).toBeInTheDocument()
	})

	it("detects external link from www prefix", () => {
		Object.defineProperty(window, "location", {
			writable: true,
			value: {
				href: "http://localhost:3000",
				hostname: "localhost",
			},
		})
		render(<Link href="www.external.com">External</Link>)
		const link = screen.getByRole("link", { name: "External" })
		expect(link).toHaveAttribute("target", "_blank")
		expect(link).toHaveAttribute("rel", "noreferrer")
		const icon = link.querySelector(".external")
		expect(icon).toBeInTheDocument()
	})

	it("renders as button when as prop is button", () => {
		render(<Link href="/test" as="button">Button Link</Link>)
		const link = screen.getByRole("link", { name: "Button Link" })
		expect(link).toBeInTheDocument()
	})

	it("handles click on internal link", async() => {
		const user = userEvent.setup()
		const onClick = vi.fn()
		render(<Link href="/test" onClick={ onClick }>Click Me</Link>)
		const link = screen.getByRole("link", { name: "Click Me" })
		await user.click(link)
		expect(onClick).toHaveBeenCalledTimes(1)
	})

	it("prevents navigation when disabled", async() => {
		const user = userEvent.setup()
		const onClick = vi.fn()
		render(<Link href="/test" disabled onClick={ onClick }>Disabled</Link>)
		const link = screen.getByRole("link", { name: "Disabled" })
		expect(link).toHaveAttribute("href", "#")
		await user.click(link)
		expect(onClick).toHaveBeenCalledTimes(1)
	})

	it("calls router.visit for non-GET methods", async() => {
		const { router } = await import("@inertiajs/react")
		render(<Link href="/delete" method="delete">Delete</Link>)
		const link = screen.getByRole("link", { name: "Delete" })
		fireEvent.click(link)
		await waitFor(() => {
			expect(vi.mocked(router.visit)).toHaveBeenCalledWith("/delete", { method: "delete" })
		}, { timeout: 2000 })
	})

	it("handles visit prop", async() => {
		const { router } = await import("@inertiajs/react")
		const visitData = { data: { key: "value" } } as unknown as Omit<Visit, "method">
		render(
			<Link href="/test" method="post" visit={ visitData }>
				Submit
			</Link>
		)
		const link = screen.getByRole("link", { name: "Submit" })
		fireEvent.click(link)
		await waitFor(() => {
			expect(vi.mocked(router.visit)).toHaveBeenCalledWith("/test", {
				method: "post",
				data: { key: "value" },
			})
		}, { timeout: 2000 })
	})

	it("handles preserveScroll prop", () => {
		render(<Link href="/test" preserveScroll>Preserve Scroll</Link>)
		const link = screen.getByRole("link", { name: "Preserve Scroll" })
		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute("href", "/test")
	})

	it("renders children correctly", () => {
		render(
			<Link href="/test">
				<span>Child Content</span>
			</Link>
		)
		expect(screen.getByText("Child Content")).toBeInTheDocument()
	})

	it("handles complex href paths", () => {
		render(<Link href="/users/123/edit">Edit User</Link>)
		const link = screen.getByRole("link", { name: "Edit User" })
		expect(link).toHaveAttribute("href", "/users/123/edit")
	})

	it("handles query string in href", () => {
		render(<Link href="/search?q=test">Search</Link>)
		const link = screen.getByRole("link", { name: "Search" })
		expect(link).toHaveAttribute("href", "/search?q=test")
	})
})
