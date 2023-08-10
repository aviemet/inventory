import {
	useMutation,
	useQuery,
	type UseQueryOptions,
	type UseMutationOptions,
} from '@tanstack/react-query'

// Re-export types for convenience in other files
export type ReactQueryOptions<T> = UseQueryOptions<T>
export type ReactMutationOptions<T> = UseMutationOptions<T>

export const query = <T>(
	key: (string|number)[],
	fn: () => Promise<T>,
	options?: ReactQueryOptions<T>,
) => {
	const queryOptions: UseQueryOptions<T> = {
		staleTime: 0,
		...options,
	}

	return useQuery<T>({
		queryKey: key,
		queryFn: fn,
		...queryOptions,
	})
}

export const mutation = <T, R = unknown>(
	key: (string|number)[],
	fn: (data: T) => Promise<R>,
	options?: UseMutationOptions<R, unknown, T, unknown>,
) => {
	const queryOptions: UseMutationOptions<R, unknown, T, unknown> = {
		cacheTime: 5000,
		...options,
	}

	return useMutation({
		mutationKey: key,
		mutationFn: fn,
		...queryOptions,
	})
}
