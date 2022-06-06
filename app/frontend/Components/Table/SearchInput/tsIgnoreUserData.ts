const tsIgnoreUserData = (model: string, hide: Record<string, string> | undefined, name: string) => ({
	user:{
		table_preferences: {
			[model]: {
				hide: {
					...hide,
					[name]: true
				}
			}
		}
	}
})

export default tsIgnoreUserData
