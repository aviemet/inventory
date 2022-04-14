import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme } from 'twin.macro'

const CustomStyles = createGlobalStyle({
	body: {
		// WebkitTapHighlightColor: theme`colors.purple.500`,
		// ...tw`antialiased`,
	},
})

import '@/css/tailwind.css'

const GlobalStyles = () => (
	<>
		<CustomStyles />
	</>
)

export default GlobalStyles
