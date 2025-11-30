export function useCheckboxState(length: number, selected: number) {
	const allChecked = length > 0 && selected === length
	const indeterminate = length > 0 && selected > 0 && selected < length

	return { allChecked, indeterminate }
}
