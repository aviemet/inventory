import React from 'react'
import { Section } from '@/Components'

const TableSection = ({ children }: { children: React.ReactNode }) => (
	<Section fullHeight={ true } sx={ {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	} }>
		{ children }
	</Section>
)

export default TableSection
