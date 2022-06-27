import React, { useCallback } from 'react'
import { useMantineTheme } from '@mantine/styles'
import { Button } from '@mantine/core'
import { NextIcon, LastIcon, PreviousIcon, FirstIcon, DotsIcon } from '@/Components/Icons'
import Link from '@/Components/Link'

export interface PaginationItemProps extends React.ComponentPropsWithoutRef<'button'> {
	page: number | 'dots' | 'prev' | 'next' | 'first' | 'last'
	active?: boolean
	onClick?: () => void
}

const ltrIcons = {
	dots: DotsIcon,
	next: NextIcon,
	prev: PreviousIcon,
	first: FirstIcon,
	last: LastIcon,
}

const rtlIcons = {
	dots: DotsIcon,
	prev: NextIcon,
	next: PreviousIcon,
	last: FirstIcon,
	first: LastIcon,
}

interface IPageItemProps extends PaginationItemProps {
	total?: number
}

const getCurrentPage = (url: URL) => {
	const searchPage = url.searchParams.get('page')

	if(searchPage === null) {
		return 1
	} else {
		return parseInt(searchPage)
	}
}

const DefaultItem = ({ page, total, active, onClick, className, tabIndex, ...aria }: IPageItemProps) => {
	const theme = useMantineTheme()
	const icons = (theme.dir === 'rtl' ? rtlIcons : ltrIcons)

	const url = new URL(window.location.href)
	const currentPage = getCurrentPage(url)

	let Item: React.FC

	if(typeof page === 'number') {
		Item = () => <>{ page }</>
	} else {
		Item = icons[page]
	}

	const pageLink = useCallback(() => {
		let linkPage

		switch(page) {
			case 1:
				linkPage = '1'
				break
			case 'next':
				linkPage = String(currentPage + 1)
				break
			case 'prev':
				linkPage = String(currentPage - 1)
				break
			default:
				linkPage = String(page)
				break
		}

		if(linkPage === '1') {
			url.searchParams.delete('page')
		} else {
			url.searchParams.set('page', String(linkPage))
		}

		return url.toString()
	}, [page])

	if((page === 'prev' && currentPage === 1) || (page === 'next' && currentPage === total)) {
		return (
			<Button disabled type="button" onClick={ onClick } className={ className } tabIndex={ tabIndex } { ...aria }>
				<Item />
			</Button>
		)
	}

	return (
		<Link external={ false } href={ pageLink() } className={ className } tabIndex={ tabIndex }>
			<Item />
		</Link>
	)
}

export default DefaultItem
