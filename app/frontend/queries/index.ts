import { UseQueryOptions, useQuery } from '@tanstack/react-query'

export type ReactQueryOptions<T> = UseQueryOptions<T>

export const query = <T>(
	key: (string|number)[],
	fn: () => Promise<T>,
	options?: ReactQueryOptions<T>,
) => {
	return useQuery<T>({
		queryKey: key,
		queryFn: fn,
		...options,
	})
}
