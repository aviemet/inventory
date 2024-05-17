import {
	type UseQueryOptions,
	type UseMutationOptions,
	type UseQueryResult,
} from '@tanstack/react-query'


interface LimitedQueryOptions<T> extends Omit<UseQueryOptions<T>, 'queryKey'|'queryFn'> {}

export type QueryFunction<T> = (options?: LimitedQueryOptions<T>) => UseQueryResult<T, Error>
export type QueryFunctionSingle<T, S = string> = (slug: S, options?: LimitedQueryOptions<T>) => UseQueryResult<T, Error>

// Re-export types for convenience in other files
export type ReactQueryOptions<T> = UseQueryOptions<T>
export type ReactMutationOptions<T> = UseMutationOptions<T>
