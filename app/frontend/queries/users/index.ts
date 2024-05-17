import { Routes } from '@/lib'
import axios from 'axios'
import UserPreferences from '@/types/UserPreferences'
import { useQuery, useMutation, useQueryClient, type UseMutationOptions  } from '@tanstack/react-query'
import { type ReactQueryFunction, type ReactMutationFunction } from '..'

// export const useUpdateUserPreferences: ReactMutationFunction<Schema.User, {id: string|number & UserPreferences }> = (data, options) => {
// 	return useMutation({
// 		mutationKey: ['users', 'preferences'],
// 		mutationFn: () => async (data) => {
// 			const res = await axios.patch(Routes.apiUpdateUserPreferences(data.id), {
// 				user: { user_preferences: data },
// 			})
// 			return res.data
// 		},
// 		...options,
// 	})
// }

// export const useUpdateUserPreferences: ReactMutationFunction<Schema.User, {id: string|number & UserPreferences }> = () => {
// 	const queryClient = useQueryClient()

// 	const updateUserPreferences = async (data) => {
// 		const res = await axios.patch(Routes.apiUpdateUserPreferences(data.id), {
// 			user: { user_preferences: data },
// 		})
// 		if(res.statusText !== 'OK') {
// 			throw new Error('Failed to create post')
// 		}
// 		return res.data
// 	}

// 	return useMutation(updateUserPreferences, {
// 		mutationKey: ['users', 'preferences'],
// 		onSuccess: () => {
// 			queryClient.invalidateQueries(['users', 'preferences'])
// 		},
// 	})
// }

type UserPreferencesParams = {
	id: string | number
	preferences: UserPreferences
}

export const useUpdateUserPreferences: ReactMutationFunction<Schema.User, UserPreferencesParams> = (
	params,
	options,
) => {
	const queryClient = useQueryClient()

	const updateUserPreferences = async ({ id, preferences }: UserPreferencesParams): Promise<Schema.User> => {
		const res = await axios.patch(Routes.apiUpdateUserPreferences(id), {
			user: { user_preferences: preferences },
		})
		if(res.statusText !== 'OK') {
			throw new Error('Failed to update user preferences')
		}
		return res.data
	}

	return useMutation(updateUserPreferences, {
		mutationKey: ['user', params.id, 'preferences'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user', params.id, 'preferences'] })
		},
		...options,
	})
}
