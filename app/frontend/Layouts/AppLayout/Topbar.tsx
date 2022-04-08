import React from 'react'
import { MdMenu } from 'react-icons/md'

const Topbar = () => {
	return (
		<header id="topbar">
			<div className="flex">
				<div className="sm:hidden cursor-pointer">
					<MdMenu id="topbar-menu-toggle" />
				</div>

				<div className="flex-1">
					 <div>Company Dropdown</div>
				</div>

				<div>User Menu</div>
			</div>
		</header>
	)
}

export default Topbar
