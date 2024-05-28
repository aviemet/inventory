import React from 'react'
import { describe, expect, test } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useGetSearchResults } from '@/queries'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: React.ReactNode}) => (
	<QueryClientProvider client={ queryClient }>
		{ children }
	</QueryClientProvider>
)

describe('useGetSearchResults', () => {
	test('it returns a successful response', async () => {

		try {
			const { result } = renderHook(
				() => useGetSearchResults({ searchParams: 'iPhone' }),
				{ wrapper },
			)

			await waitFor(() => {
				expect(result.current.isSuccess).toBe(true)
				expect(result.current.data?.length).toBeGreaterThan(0)
			})
		} catch(e) {
			console.log({ error: e })
			throw e
		}
	})
})
