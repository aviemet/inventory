import { NestedURLSearchParams, coerceArray, isUnset } from '@/lib'
import { type TInputParam } from './useAdvancedSearch'

/**
 * Generate a URL for advanced searching
 *
 * @param inputParams List of all input params passed to hook
 * @param values Map of all current search values
 * @returns Link to same page with URL params to use for advanced search
 */
function buildSearchLink(
	inputParams: readonly TInputParam[],
	values: NestedURLSearchParams,
) {
	const localValues = values.clone()
	console.log({ inputParams })
	for(const [key, value] of localValues) {
		if(value === undefined) continue

		const inputParam = inputParams.find(param => param.name === key)

		// Exclude key if dependents are empty
		if(inputParam?.dependent) {
			let shouldBeIncluded = true
			coerceArray(inputParam.dependent).forEach(dependentParam => {
				if(isUnset(values.get(dependentParam))) {
					shouldBeIncluded = false
				}
			})

			if(!shouldBeIncluded) {
				localValues.unset(key)
				continue
			}
		}

		// Handle Date values
		if(value instanceof Date || (Array.isArray(value) && value[0] instanceof Date)) {
			const dateStr = coerceArray(value).reduce((str, date, i) => {
				return `${str}${i === 0 ? '' : ','}${date.toISOString()}`
			}, '')
			localValues.set(key, dateStr)
			continue
		}

		localValues.set(key, value)
	}

	if(localValues.isEmpty()) {
		return `${location.pathname}`
	} else {
		localValues.set('adv', 'true')
		return localValues.toString()
	}
}

export default buildSearchLink
