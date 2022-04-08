import React from 'react'

const Footer = () => {
	return (
		<footer id="footer" className="border-gray-500 shadow pr-3  pt-1">
			<div className="flex-row-reverse flex text-gray-600">
				©{ (new Date).getFullYear() }
			</div>
		</footer>
	)
}

export default Footer