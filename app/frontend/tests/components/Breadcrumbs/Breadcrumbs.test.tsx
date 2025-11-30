import { screen } from "@testing-library/react"
import { describe, expect, it, beforeEach, afterEach } from "vitest"

import Breadcrumbs, { type Breadcrumb } from "@/components/Breadcrumbs"
import { render } from "@/tests/helpers/utils"

describe("Breadcrumbs", () => {
	beforeEach(() => {
		const portalTarget = document.createElement("div")
		portalTarget.id = "footer-portal"
		document.body.appendChild(portalTarget)
	})

	afterEach(() => {
		const portalTarget = document.getElementById("footer-portal")
		if(portalTarget) {
			document.body.removeChild(portalTarget)
		}
	})

	it("renders without error when crumbs are provided", () => {
		const crumbs: Breadcrumb[] = [
			{ title: "Home", href: "/" },
			{ title: "Products" },
		]
		render(<Breadcrumbs crumbs={ crumbs } />)
		expect(screen.getByRole("navigation", { name: "breadcrumbs" })).toBeInTheDocument()
	})

	it("renders nothing when crumbs is undefined", () => {
		const { container } = render(<Breadcrumbs />)
		const portalTarget = document.getElementById("footer-portal")
		expect(portalTarget?.children.length).toBe(0)
	})

	it("renders nothing when crumbs is undefined", () => {
		render(<Breadcrumbs crumbs={ undefined } />)
		const portalTarget = document.getElementById("footer-portal")
		expect(portalTarget?.children.length).toBe(0)
	})

	it("renders all breadcrumb items", () => {
		const crumbs: Breadcrumb[] = [
			{ title: "Home", href: "/" },
			{ title: "Products", href: "/products" },
			{ title: "Current" },
		]
		render(<Breadcrumbs crumbs={ crumbs } />)
		expect(screen.getByText("Home")).toBeInTheDocument()
		expect(screen.getByText("Products")).toBeInTheDocument()
		expect(screen.getByText("Current")).toBeInTheDocument()
	})

	it("renders links for crumbs with href", () => {
		const crumbs: Breadcrumb[] = [
			{ title: "Home", href: "/" },
			{ title: "Products", href: "/products" },
		]
		render(<Breadcrumbs crumbs={ crumbs } />)
		const homeLink = screen.getByRole("link", { name: "Home" })
		const productsLink = screen.getByRole("link", { name: "Products" })
		expect(homeLink).toHaveAttribute("href", "/")
		expect(productsLink).toHaveAttribute("href", "/products")
	})

	it("renders text without link for crumbs without href", () => {
		const crumbs: Breadcrumb[] = [
			{ title: "Home", href: "/" },
			{ title: "Current" },
		]
		render(<Breadcrumbs crumbs={ crumbs } />)
		expect(screen.getByText("Current")).toBeInTheDocument()
		const currentLink = screen.queryByRole("link", { name: "Current" })
		expect(currentLink).not.toBeInTheDocument()
	})

	it("sets aria-current on last crumb with href", () => {
		const crumbs: Breadcrumb[] = [
			{ title: "Home", href: "/" },
			{ title: "Current", href: "/current" },
		]
		render(<Breadcrumbs crumbs={ crumbs } />)
		const currentLink = screen.getByRole("link", { name: "Current" })
		expect(currentLink).toHaveAttribute("aria-current", "location")
	})

	it("does not set aria-current on non-last crumbs", () => {
		const crumbs: Breadcrumb[] = [
			{ title: "Home", href: "/" },
			{ title: "Products", href: "/products" },
		]
		render(<Breadcrumbs crumbs={ crumbs } />)
		const homeLink = screen.getByRole("link", { name: "Home" })
		expect(homeLink).not.toHaveAttribute("aria-current", "location")
	})

	it("uses default separator", () => {
		const crumbs: Breadcrumb[] = [
			{ title: "Home", href: "/" },
			{ title: "Current" },
		]
		render(<Breadcrumbs crumbs={ crumbs } />)
		const separator = screen.getByText(">")
		expect(separator).toBeInTheDocument()
		expect(separator).toHaveAttribute("aria-hidden", "true")
	})

	it("uses custom separator", () => {
		const crumbs: Breadcrumb[] = [
			{ title: "Home", href: "/" },
			{ title: "Current" },
		]
		render(<Breadcrumbs crumbs={ crumbs } separator={ "/" } />)
		const separator = screen.getByText("/")
		expect(separator).toBeInTheDocument()
	})

	it("does not render separator after last crumb", () => {
		const crumbs: Breadcrumb[] = [
			{ title: "Home", href: "/" },
			{ title: "Current" },
		]
		render(<Breadcrumbs crumbs={ crumbs } separator={ "/" } />)
		const separators = screen.queryAllByText("/")
		expect(separators).toHaveLength(1)
	})

	it("renders empty array without error", () => {
		render(<Breadcrumbs crumbs={ [] } />)
		const nav = screen.getByRole("navigation", { name: "breadcrumbs" })
		expect(nav).toBeInTheDocument()
		const ol = nav.querySelector("ol")
		expect(ol).toBeInTheDocument()
		expect(ol?.children.length).toBe(0)
	})

	it("renders single crumb without separator", () => {
		const crumbs: Breadcrumb[] = [
			{ title: "Home" },
		]
		render(<Breadcrumbs crumbs={ crumbs } />)
		expect(screen.getByText("Home")).toBeInTheDocument()
		const separator = screen.queryByText(">")
		expect(separator).not.toBeInTheDocument()
	})

	it("passes through additional Box props", () => {
		const crumbs: Breadcrumb[] = [
			{ title: "Home", href: "/" },
		]
		render(<Breadcrumbs crumbs={ crumbs } data-testid="custom-breadcrumbs" />)
		expect(screen.getByTestId("custom-breadcrumbs")).toBeInTheDocument()
	})

	it("handles crumbs with same title correctly", () => {
		const crumbs: Breadcrumb[] = [
			{ title: "Home", href: "/home" },
			{ title: "Home", href: "/home/again" },
		]
		render(<Breadcrumbs crumbs={ crumbs } />)
		const links = screen.getAllByRole("link", { name: "Home" })
		expect(links).toHaveLength(2)
		expect(links[0]).toHaveAttribute("href", "/home")
		expect(links[1]).toHaveAttribute("href", "/home/again")
	})
})
