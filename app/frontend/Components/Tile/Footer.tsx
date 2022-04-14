import React from 'react'
import tw, { styled } from 'twin.macro'

const Tester = ({ children }) => {
	return (
		<div className="tile-footer">{ children }</div>
	)
}

const Footer = ({ children }) => {
	return (
		<TileFooter tw="flex bg-gray-100 rounded-b-lg">
			{ children }
		</TileFooter>
	)
}

export default Footer

const TileFooter = styled.div`
  & > * {
    ${tw`sm:px-8 px-4 py-3`}
  }
`
