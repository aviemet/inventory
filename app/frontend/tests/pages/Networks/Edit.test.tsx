import React from 'react'
import { describe, test, expect, beforeEach } from 'vitest'
import { render } from '@/tests/helpers/utils'
import NetworkEdit from '@/pages/Networks/Edit'
import {
	createMockNetworkEdit,
} from './helpers'

describe('Networks/Edit', () => {
	beforeEach(() => {
		window.location.href = 'http://localhost:3000/networks/1/edit'
		window.location.pathname = '/networks/1/edit'
	})

	test('renders without error', () => {
		const network = createMockNetworkEdit()

		expect(() => {
			render(<NetworkEdit network={ network } />)
		}).not.toThrow()
	})
})
