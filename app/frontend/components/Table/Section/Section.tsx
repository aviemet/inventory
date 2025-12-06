import React from "react"

import { Section as BaseSection } from "@/components"

import * as classes from "./Section.css"
import { TableSectionContextProvider } from "../Provider/TableContext"

export function Section({ children }: { children: React.ReactNode }) {
	return (
		<TableSectionContextProvider value={ {} }>
			<BaseSection fullHeight className={ classes.section }>
				{ children }
			</BaseSection>
		</TableSectionContextProvider>
	)
}

Section.displayName = "Table.Section"
