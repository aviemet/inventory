import React from 'react'
import tw, { styled } from 'twin.macro'

const Footer = () => {
	return (
		<footer id="footer" tw="pt-1 pr-3 border-gray-300 shadow border-t bg-white dark:bg-gray-600">
			<div className="flex flex-row-reverse text-gray-600">
				©{ (new Date).getFullYear() }
			</div>
		</footer>
	)
}

export default Footer

