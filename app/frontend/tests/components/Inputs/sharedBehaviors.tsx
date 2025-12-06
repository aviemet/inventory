import { screen, RenderResult } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import { expect, it, vi } from "vitest"

import { type BaseInputProps } from "@/components/Inputs"
import { render } from "@/tests/helpers/utils"

type InputComponentProps = BaseInputProps & Record<string, unknown>

export interface InputTestConfig {
	component: React.ComponentType<InputComponentProps>
	defaultProps: InputComponentProps
	getInputElement: (result: RenderResult) => HTMLElement
	interactionTest?: {
		action: (element: HTMLElement, user: ReturnType<typeof userEvent.setup>) => Promise<void>
	}
	checkNameAttribute?: boolean
}

export const testCommonInputBehaviors = (config: InputTestConfig) => {
	const {
		component: Component,
		defaultProps,
		getInputElement,
		interactionTest,
		checkNameAttribute = true,
	} = config

	it("renders without error", () => {
		const result = render(<Component { ...defaultProps } />)
		const input = getInputElement(result)
		expect(input).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		const result = render(<Component { ...defaultProps } id="test-input" />)
		const input = getInputElement(result)
		expect(input).toHaveAttribute("id", "test-input")
	})

	it("uses name as id when id is not provided", () => {
		const result = render(<Component { ...defaultProps } name="test-input" />)
		const input = getInputElement(result)
		expect(input).toHaveAttribute("id", "test-input")
		if(checkNameAttribute) {
			expect(input).toHaveAttribute("name", "test-input")
		}
	})

	if(interactionTest) {
		it("handles onChange callback", async() => {
			const user = userEvent.setup()
			const onChange = vi.fn()
			const result = render(<Component { ...defaultProps } onChange={ onChange } />)
			const input = getInputElement(result)
			await interactionTest.action(input, user)
			expect(onChange).toHaveBeenCalled()
		})
	}

	it("handles disabled state", () => {
		const result = render(<Component { ...defaultProps } disabled />)
		const input = getInputElement(result)
		expect(input).toBeDisabled()
	})

	it("handles wrapper prop", () => {
		render(<Component { ...defaultProps } wrapper={ true } wrapperProps={ { "data-testid": "wrapper" } } />)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})

	it("handles wrapperProps", () => {
		render(<Component { ...defaultProps } wrapperProps={ { "data-testid": "wrapper", "data-custom": "value" } } />)
		const wrapper = screen.getByTestId("wrapper")
		expect(wrapper).toHaveAttribute("data-custom", "value")
	})
}

export const testLabelBehavior = (
	Component: React.ComponentType<InputComponentProps>,
	defaultProps: InputComponentProps,
	queryByLabelText: (text: string) => HTMLElement | null = (text) => screen.queryByLabelText(text),
) => {
	it("renders with label when provided", () => {
		render(<Component { ...defaultProps } label="Test Label" />)
		expect(queryByLabelText("Test Label")).toBeInTheDocument()
	})
}

export const testPlaceholderBehavior = (
	Component: React.ComponentType<InputComponentProps>,
	defaultProps: InputComponentProps,
	queryByPlaceholderText: (text: string) => HTMLElement | null = (text) => screen.queryByPlaceholderText(text),
) => {
	it("handles placeholder prop", () => {
		render(<Component { ...defaultProps } placeholder="Enter text" />)
		expect(queryByPlaceholderText("Enter text")).toBeInTheDocument()
	})
}

export const testRequiredBehavior = (
	Component: React.ComponentType<InputComponentProps>,
	defaultProps: InputComponentProps,
	getInputElement: (result: RenderResult) => HTMLElement,
) => {
	it("handles required prop", () => {
		const result = render(<Component { ...defaultProps } required label="Required Field" />)
		const input = getInputElement(result)
		expect(input).toBeRequired()
	})
}
