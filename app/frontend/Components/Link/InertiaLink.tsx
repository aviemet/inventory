import React, { forwardRef } from 'react'
import { Link, router, type InertiaLinkProps } from '@inertiajs/react'
import { Method, Visit } from '@inertiajs/core'
import { Anchor, Sx, type AnchorProps, type ButtonProps } from '@mantine/core'
import { Button } from '@/Components'

interface IAnchorLinkProps extends Omit<InertiaLinkProps, 'color'|'size'|'span'>, Omit<AnchorProps, 'href'> {}

const AnchorLink = forwardRef<HTMLAnchorElement, IAnchorLinkProps>((props, ref) => <Anchor ref={ ref } component={ Link } { ...props } />)

interface ILinkProps extends IAnchorLinkProps {
	children?: React.ReactNode
	href: string
	as: 'a'|'button'
	method?: Method
	visit?: Omit<Visit, 'method'>
	compact?: boolean
	buttonProps?: ButtonProps
	disabled?: boolean
	sx?: Sx
}

const InertiaLinkComponent = forwardRef<HTMLAnchorElement, ILinkProps>((
	{ children, href, as = 'a', method, visit, buttonProps, sx, ...props },
	ref,
) => {
	const handleHTTP = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault()

		router.visit(href, {
			method,
			...visit,
		})
	}

	if((method !== undefined && method !== 'get')) {
		return <Button
			ref={ ref }
			component={ AnchorLink }
			href={ href }
			onClick={ handleHTTP }
			sx={ [{ '&:hover': { textDecoration: 'none' } }, sx] }
			{ ...props }
		>
			{ children }
		</Button>
	}

	if(as === 'button') {
		return <Button
			ref={ ref }
			component={ AnchorLink }
			href={ href }
			sx={ [{ '&:hover': { textDecoration: 'none' } }, sx] }
			{ ...props }
		>
			{ children }
		</Button>
	}

	return (
		<AnchorLink href={ href } ref={ ref } { ...props }>{ children }</AnchorLink>
	)
})

export default InertiaLinkComponent
