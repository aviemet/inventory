import React from 'react'
import tw, { styled } from 'twin.macro'

const Card = ({ children }) => {
	return (
		<div tw="rounded border shadow m-4 p-3 flex-1">{ children }</div>
	)
}

export default Card
