import React from 'react'
import { describe, test, expect, beforeEach } from 'vitest'
import { render } from '@/tests/helpers/utils'
import NetworkShow from '@/pages/Networks/Show'
import {
	createMockNetworkShow,
	createMockIpLeaseShow,
	createMockPagination,
} from './helpers'

describe('Networks/Show', () => {
	beforeEach(() => {
		window.location.href = 'http://localhost:3000/networks/1'
		window.location.pathname = '/networks/1'
	})

	test('renders without error', () => {
		const network = createMockNetworkShow()
		const ips = [createMockIpLeaseShow()]
		const pagination = createMockPagination()

		expect(() => {
			render(<NetworkShow network={ network } ips={ ips } pagination={ pagination } />)
		}).not.toThrow()
	})
})
