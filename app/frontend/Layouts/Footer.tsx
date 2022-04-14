import React from 'react'

const Footer = () => {
	return (
		<footer id="footer" className="pt-1 pr-3 border-gray-500 shadow">
			<div className="flex flex-row-reverse text-gray-600">
				©{ (new Date).getFullYear() }
			</div>
		</footer>
	)
}

export default Footer
