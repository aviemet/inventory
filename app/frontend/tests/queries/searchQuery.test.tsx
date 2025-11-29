import React from 'react'
import { describe, expect, test, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useGetSearchResults } from '@/queries'
import axios from 'axios'
import { mockSearchResults } from '@/tests/helpers/handlers'

vi.mock('axios')

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
})
const wrapper = ({ children }: { children: React.ReactNode }) => (
	<QueryClientProvider client={ queryClient }>
		{ children }
	</QueryClientProvider>
)

describe('useGetSearchResults', () => {
	beforeEach(() => {
		vi.clearAllMocks()
		vi.mocked(axios.get).mockResolvedValue({ data: mockSearchResults })
	})

	test('it returns a successful response', async () => {
		const { result } = renderHook(
			() => useGetSearchResults({ searchParams: 'iPhone' }),
			{ wrapper },
		)

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true)
			expect(result.current.data?.length).toBeGreaterThan(0)
		})
	})
})
