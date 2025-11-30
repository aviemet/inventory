import { screen } from "@testing-library/react"
import { describe, test, expect, beforeEach } from "vitest"

import NetworkShow from "@/pages/Networks/Show"
import { render } from "@/tests/helpers/utils"

import {
	createMockNetworkShow,
	createMockIpLeaseShow,
	createMockPagination,
} from "./helpers"

describe("Networks/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/networks/1"
		window.location.pathname = "/networks/1"
	})

	test("renders without error", () => {
		const network = createMockNetworkShow()
		const ips = [createMockIpLeaseShow()]
		const pagination = createMockPagination()

		expect(() => {
			render(<NetworkShow network={ network } ips={ ips } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders network with DHCP range", () => {
		const network = createMockNetworkShow({
			dhcp_start: "192.168.1.100",
			dhcp_end: "192.168.1.200",
		})
		const ips = [createMockIpLeaseShow()]
		const pagination = createMockPagination()

		render(<NetworkShow network={ network } ips={ ips } pagination={ pagination } />)

		expect(screen.getByText("DHCP Start")).toBeInTheDocument()
		expect(screen.getByText("192.168.1.100")).toBeInTheDocument()
		expect(screen.getByText("DHCP End")).toBeInTheDocument()
		expect(screen.getByText("192.168.1.200")).toBeInTheDocument()
	})

	test("renders network without DHCP range", () => {
		const network = createMockNetworkShow({
			dhcp_start: undefined,
			dhcp_end: undefined,
		})
		const ips = [createMockIpLeaseShow()]
		const pagination = createMockPagination()

		render(<NetworkShow network={ network } ips={ ips } pagination={ pagination } />)

		expect(screen.getByText("DHCP Start")).toBeInTheDocument()
		expect(screen.getByText("DHCP End")).toBeInTheDocument()

		const dhcpStartCell = screen.getByText("DHCP Start").closest("tr")?.querySelectorAll("td")[1]
		const dhcpEndCell = screen.getByText("DHCP End").closest("tr")?.querySelectorAll("td")[1]

		expect(dhcpStartCell?.textContent).toBe("")
		expect(dhcpEndCell?.textContent).toBe("")
	})
})
