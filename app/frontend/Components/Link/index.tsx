import React from 'react'
import { InertiaLink, InertiaLinkProps } from '@inertiajs/inertia-react'
import { Button } from '@/Components'
import { Inertia, Method, Visit } from '@inertiajs/inertia'

interface LinkProps extends InertiaLinkProps {
	method?: Method
	visit?: Omit<Visit, 'method'>
}

const Link = ({ children, href, as = 'a', method, visit, ...props }: LinkProps) => {
	const handleHTTP = e => {
		Inertia.visit(href, {
			method,
			...visit
		})
	}

	if(method !== undefined && method !== 'get') {
		// Only present standard GET requests as anchor tags, all others as buttons

		return (
			<InertiaLink href={ href } onClick={ e => e.preventDefault() }>
				<Button onClick={ handleHTTP }>{ children }</Button>
			</InertiaLink>
		)
	}

	const asButton = as === 'button'
	return (
		<InertiaLink href={ href } { ...props } as={ asButton ? 'a' : as }>
			{ asButton ? <Button>{ children }</Button> : children }
		</InertiaLink>
	)
}

export default Link
