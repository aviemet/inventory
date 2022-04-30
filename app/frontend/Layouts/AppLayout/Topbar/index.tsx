import React from 'react'
import { SearchableDropdown } from '@/Components/Inputs'
import { MdMenu } from 'react-icons/md'
import { useAuth } from '@/Providers'
import ActiveCompanyDropdown from './ActiveCompanyDropdown'
import { Popover } from '@/Components/Popover'
import tw, { styled } from 'twin.macro'

const Topbar = () => {
	const { user } = useAuth()

	return (
		<TopbarHeader id="topbar">
			<div tw="flex">
				<div tw="sm:hidden cursor-pointer">
					<MdMenu id="topbar-menu-toggle" />
				</div>

				<div tw="flex-1">
					<ActiveCompanyDropdown user={ user } />
				</div>
			</div>
		</TopbarHeader>
	)
}

export default Topbar

const TopbarHeader = styled.header`
	margin-bottom: 1px;

	${tw`dark:bg-gray-600 px-2 py-1 bg-white shadow`}

	#topbar-menu-toggle {
		padding: 6px 37px 0 5px;
	}
`