import {
	type UseQueryOptions,
	type UseMutationOptions,
	type UseQueryResult,
	type UseMutationResult,
} from '@tanstack/react-query'

/**
 * Query types
 */

// Exclude the functions which will be called in the query definitions
interface LimitedQueryOptions<T> extends Omit<UseQueryOptions<T>, 'queryKey'|'queryFn'> {}

type ReactQueryFunctionBasic<T> = (options?: LimitedQueryOptions<T>) => UseQueryResult<T, Error>;
type ReactQueryFunctionWithParams<T, P extends Record<string, string|number|string[]>> = (params: P, options?: LimitedQueryOptions<T>) => UseQueryResult<T, Error>;

export type ReactQueryFunction<T, P = undefined> =
	P extends undefined
		? ReactQueryFunctionBasic<T>
		: P extends Record<string, string|number|string[]>
			? ReactQueryFunctionWithParams<T, P>
			: never;

/**
 * Mutation types
 */

type IfEmpty<T, TrueType, FalseType> = keyof T extends never ? TrueType : FalseType;

type MutationOptions<T, P, O> = Omit<UseMutationOptions<T, unknown, P, unknown>, 'mutationKey' | 'onSuccess'> & {
	onSuccess?: (data: T, variables: P) => void
} & IfEmpty<O, {}, { params: O }>;

export type ReactMutationFunction<
	T, // Data type returned by the mutation
	P, // Data type passed to mutate function
	O extends Record<string, unknown> = {} // Optional parameters for setting up hook
> = (
	options: MutationOptions<T, P, O>
) => UseMutationResult<T, unknown, P, unknown>;

/**
 * Folder exports
 */

export * from './assets'
export * from './categories'
export * from './currencies'
export * from './departments'
export * from './documentations'
export * from './items'
export * from './locations'
export * from './manufacturers'
export * from './models'
export * from './people'
export * from './searches'
export * from './statusLabels'
export * from './users'
export * from './vendors'
