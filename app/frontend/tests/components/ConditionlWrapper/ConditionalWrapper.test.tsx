import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import ConditionalWrapper from "@/components/ConditionalWrapper"
import { render } from "@/tests/helpers/utils"

describe("ConditionalWrapper", () => {
	it("renders without error", () => {
		render(
			<ConditionalWrapper condition={ true } wrapper={ (children) => <div data-testid="wrapper">{ children }</div> }>
				<span>Content</span>
			</ConditionalWrapper>
		)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("applies wrapper when condition is true", () => {
		render(
			<ConditionalWrapper condition={ true } wrapper={ (children) => <div data-testid="wrapper">{ children }</div> }>
				<span>Content</span>
			</ConditionalWrapper>
		)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("does not apply wrapper when condition is false and no elseWrapper", () => {
		const { container } = render(
			<ConditionalWrapper condition={ false } wrapper={ (children) => <div data-testid="wrapper">{ children }</div> }>
				<span>Content</span>
			</ConditionalWrapper>
		)
		expect(screen.queryByTestId("wrapper")).not.toBeInTheDocument()
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("applies elseWrapper when condition is false and elseWrapper provided", () => {
		render(
			<ConditionalWrapper
				condition={ false }
				wrapper={ (children) => <div data-testid="wrapper">{ children }</div> }
				elseWrapper={ (children) => <div data-testid="else-wrapper">{ children }</div> }
			>
				<span>Content</span>
			</ConditionalWrapper>
		)
		expect(screen.queryByTestId("wrapper")).not.toBeInTheDocument()
		expect(screen.getByTestId("else-wrapper")).toBeInTheDocument()
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("does not apply elseWrapper when condition is true", () => {
		render(
			<ConditionalWrapper
				condition={ true }
				wrapper={ (children) => <div data-testid="wrapper">{ children }</div> }
				elseWrapper={ (children) => <div data-testid="else-wrapper">{ children }</div> }
			>
				<span>Content</span>
			</ConditionalWrapper>
		)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
		expect(screen.queryByTestId("else-wrapper")).not.toBeInTheDocument()
	})

	it("handles ReactNode children", () => {
		render(
			<ConditionalWrapper condition={ true } wrapper={ (children) => <div data-testid="wrapper">{ children }</div> }>
				{ [
					<span key="1">First</span>,
					<span key="2">Second</span>,
				] }
			</ConditionalWrapper>
		)
		expect(screen.getByText("First")).toBeInTheDocument()
		expect(screen.getByText("Second")).toBeInTheDocument()
	})

	it("handles null children", () => {
		const { container } = render(
			<ConditionalWrapper condition={ true } wrapper={ (children) => <div data-testid="wrapper">{ children }</div> }>
				{ null }
			</ConditionalWrapper>
		)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})

	it("handles undefined children", () => {
		const { container } = render(
			<ConditionalWrapper condition={ true } wrapper={ (children) => <div data-testid="wrapper">{ children }</div> }>
				{ undefined }
			</ConditionalWrapper>
		)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})

	it("handles complex nested children", () => {
		render(
			<ConditionalWrapper condition={ true } wrapper={ (children) => <div data-testid="wrapper">{ children }</div> }>
				<div>
					<span>Nested</span>
					<p>Content</p>
				</div>
			</ConditionalWrapper>
		)
		expect(screen.getByText("Nested")).toBeInTheDocument()
		expect(screen.getByText("Content")).toBeInTheDocument()
	})
})
