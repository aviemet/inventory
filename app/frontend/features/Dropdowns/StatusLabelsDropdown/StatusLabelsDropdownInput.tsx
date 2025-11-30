import { isEmpty } from "lodash"
import React, { forwardRef } from "react"

import { Select as InputSelect } from "@/components/Inputs"
import { useGetStatusLabelsAsOptions } from "@/queries/statusLabels"

import { type AsyncDropdown } from ".."

interface StatusLabelsDropdownProps extends AsyncDropdown<Schema.StatusLabelsOptions> {}

const StatusLabelsDropdown = forwardRef<HTMLInputElement, StatusLabelsDropdownProps>((
	{ label = "Status Label", name = "status_label_id", initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetStatusLabelsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return <InputSelect
		ref={ ref }
		label={ label }
		name={ name }
		options={ !data
			? []
			: data.map(statusLabel => ({
				label: statusLabel.name!,
				value: String(statusLabel.id),
			})) }
		onDropdownOpen={ () => {
			if(isEmpty(data) || isStale) refetch()
		} }
		searchable
		clearable
		value={ value }
		{ ...props } />
})

export default StatusLabelsDropdown
