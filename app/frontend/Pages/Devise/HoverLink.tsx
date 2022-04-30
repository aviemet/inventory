import React from 'react'
import { Link } from '@/Components'
import tw, { styled } from 'twin.macro'

export default styled(Link)`
	${tw`flex-1 text-center transition-all duration-500 border-t`}
	&:hover {
		${tw`bg-violet-100`}
	}
`
