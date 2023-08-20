import { coerceArray, isUnset } from '@/lib'
import { TParamValue, type TInputParam } from './useAdvancedSearch'

/**
 * Generate a URL for advanced searching
 *
 * @param urlParams Map of params from address
 * @param inputParams List of all input params passed to hook
 * @param values Map of all current search values
 * @returns Link to same page with URL params to use for advanced search
 */
function buildSearchLink(
	urlParams: URLSearchParams,
	inputParams: readonly TInputParam[],
	values: Map<string, TParamValue>,
) {
	urlParams.delete('adv')

	for(const [key, value] of values) {
		const inputParam = inputParams.find(param => param.name === key)

		// Delete key if input has been emptied
		if(isUnset(value)) {
			urlParams.delete(key)
			continue
		}

		// Exclude key if dependents are empty
		if(inputParam?.dependent) {
			let shouldBeIncluded = true
			coerceArray(inputParam.dependent).forEach(dependentParam => {
				if(isUnset(values.get(dependentParam))) {
					shouldBeIncluded = false
				}
			})

			if(!shouldBeIncluded) {
				urlParams.delete(key)
				continue
			}
		}

		// Handle Date values
		if(value instanceof Date || (Array.isArray(value) && value[0] instanceof Date)) {
			const dateStr = coerceArray(value).reduce((str, date, i) => {
				return `${str}${i === 0 ? '' : ','}${date.toISOString()}`
			}, '')
			urlParams.set(key, dateStr)
			continue
		}

		urlParams.set(key, String(value))
	}

	if(urlParams.size > 0) {
		urlParams.set('adv', 'true')
		return `${location.pathname}?${urlParams.toString()}`
	} else {
		return `${location.pathname}`
	}
}

export default buildSearchLink
