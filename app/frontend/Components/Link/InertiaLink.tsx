import React from 'react'
import { InertiaLink as InertiaLinkComponent, type InertiaLinkProps } from '@inertiajs/inertia-react'
import { Button } from '@/Components'
import { Inertia, Method, Visit } from '@inertiajs/inertia'


interface LinkProps extends InertiaLinkProps {
	method?: Method
	visit?: Omit<Visit, 'method'>
	external?: boolean
}

const InertiaLink = ({ children, href, as = 'a', method, visit, external = false, ...props }: LinkProps) => {
	const handleHTTP = e => {
		Inertia.visit(href, {
			method,
			...visit
		})
	}

	// Only present standard GET requests as anchor tags, all others as buttons
	if(method !== undefined && method !== 'get') {
		return (
			<InertiaLinkComponent href={ href } onClick={ e => e.preventDefault() }>
				<Button onClick={ handleHTTP }>{ children }</Button>
			</InertiaLinkComponent>
		)
	}

	const asButton = as === 'button'
	return (
		<InertiaLinkComponent href={ href } { ...props } as={ asButton ? 'a' : as }>
			{ asButton ? <Button>{ children }</Button> : children }
		</InertiaLinkComponent>
	)
}

export default InertiaLink
