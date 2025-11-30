import { usePage } from "@inertiajs/react"
import { vi } from "vitest"

import { type SharedInertiaProps } from "@/lib/hooks/usePageProps"
import { createMockPageProps } from "@/tests/helpers/setup"

vi.mock("@mantine/notifications", async() => {
	const actual = await vi.importActual("@mantine/notifications")
	return {
		...actual,
		showNotification: vi.fn(),
	}
})

export const mockUsePage = (flash: SharedInertiaProps["flash"]) => {
	const mockPageProps = createMockPageProps({ flash })
	vi.mocked(usePage).mockReturnValue({
		component: undefined,
		props: mockPageProps,
		url: "/",
		version: null,
	} as any)
}
