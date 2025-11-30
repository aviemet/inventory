import React, { forwardRef } from "react"

import { useTableSectionContext } from "../TableContext"
import { BodyRow } from "./BodyRow"
import { HeadRow } from "./HeadRow"

import { RowBaseProps } from "./index"


interface RowInContextProps extends RowBaseProps {}

export const RowInContext = forwardRef<HTMLTableRowElement, RowInContextProps>((
	{ children, ...props },
	ref,
) => {
	const { section } = useTableSectionContext()

	return section === "head" ?
		<HeadRow ref={ ref } { ...props }>{ children }</HeadRow>
		:
		<BodyRow ref={ ref } { ...props }>{ children }</BodyRow>
})
