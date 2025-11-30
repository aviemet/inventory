import { router } from "@inertiajs/react"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, vi } from "vitest"

export const testShowPageTabs = async(tabLabels: string[]) => {
	const user = userEvent.setup()

	const originalReload = router.reload

	router.reload = vi.fn((options?: any) => {
		if(options?.data?.tab) {
			const url = new URL(window.location.href)
			url.searchParams.set("tab", options.data.tab)
			window.history.replaceState({}, "", url.toString())
		}
		return originalReload(options)
	})

	try {
		for(const label of tabLabels) {
			const tab = screen.getByRole("tab", { name: label })
			expect(tab).toBeInTheDocument()

			await user.click(tab)

			expect(router.reload).toHaveBeenCalled()

			const allPanels = screen.getAllByRole("tabpanel", { hidden: true })
			expect(allPanels.length).toBeGreaterThan(0)

			for(const panel of allPanels) {
				expect(() => {
					panel.textContent
				}).not.toThrow()
			}
		}
	} finally {
		router.reload = originalReload
	}
}
