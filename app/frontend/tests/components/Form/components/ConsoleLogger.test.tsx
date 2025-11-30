import { describe, expect, it, vi, beforeEach } from "vitest"

import { Form } from "@/components/Form"
import { ConsoleLogger } from "@/components/Form/components/ConsoleLogger"
import { render } from "@/tests/helpers/utils"

const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {})

describe("ConsoleLogger", () => {
	beforeEach(() => {
		consoleSpy.mockClear()
	})

	it("renders without error", () => {
		const { container } = render(
			<Form to="/test" data={ { name: "" } }>
				<ConsoleLogger prop="data" />
			</Form>
		)
		expect(container.firstChild).toBeInTheDocument()
	})

	it("logs form prop to console", () => {
		render(
			<Form to="/test" data={ { name: "test" } }>
				<ConsoleLogger prop="data" />
			</Form>
		)
		expect(consoleSpy).toHaveBeenCalled()
	})
})
