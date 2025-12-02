import React from "react"

import { Section } from "@/components"

import * as classes from "./Section.css"

export function TableSection({ children }: { children: React.ReactNode }) {
	return (
		<Section fullHeight className={ classes.section }>
			{ children }
		</Section>
	)
}

TableSection.displayName = "Table.Section"
