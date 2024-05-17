import { Routes } from '@/lib'
import axios from 'axios'
import UserPreferences from '@/types/UserPreferences'
import { useQuery, useMutation, useQueryClient, type UseMutationOptions  } from '@tanstack/react-query'
import { type ReactQueryFunction, type ReactMutationFunction } from '.'

export const useUpdateUserPreferences: ReactMutationFunction<Schema.User, { id: string | number, preferences: UserPreferences }> = (
	params,
	options = {},
) => {
	const queryClient = useQueryClient()

	const updateUserPreferences = async ({ id, preferences }: { id: string | number, preferences: UserPreferences }): Promise<Schema.User> => {
		const res = await axios.patch(Routes.apiUpdateUserPreferences(id), {
			user: { user_preferences: preferences },
		})
		if(res.statusText !== 'OK') {
			throw new Error('Failed to update user preferences')
		}
		return res.data
	}

	return useMutation(updateUserPreferences, {
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user', params.id, 'preferences'] })
		},
		...options,
	})
}
