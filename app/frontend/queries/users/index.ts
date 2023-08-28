import { Routes } from '@/lib'
import axios from 'axios'
import { mutation } from '..'
import IUserPreferences from '@/types/IUserPreferences'

type TUpdateUserPreferencesProps = {
	id: string|number
	data: Partial<IUserPreferences>
}

export const useUpdateUserPreferences = () => {
	return mutation(
		['users', 'preferences'],
		(data: TUpdateUserPreferencesProps) => axios.patch(Routes.apiUpdateUserPreferences(data.id), {
			user: { user_preferences: data.data },
		}),
	)
}
