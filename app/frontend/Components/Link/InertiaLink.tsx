import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import { Anchor, type AnchorProps } from '@mantine/core'
import { Button } from '@/Components'
import { Inertia, Method, Visit } from '@inertiajs/inertia'


interface LinkProps extends Omit<AnchorProps<any>, 'href'> {
	children: React.ReactNode
	href: string
	as: 'a'|'button'
	method?: Method
	visit?: Omit<Visit, 'method'>
	external?: boolean
}

const InertiaLinkComponent = ({ children, href, as = 'a', method, visit, external = false, ...props }: LinkProps) => {
	const handleHTTP = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		Inertia.visit(href, {
			method,
			...visit
		})
	}

	// Only present standard GET requests as anchor tags, all others as buttons
	if(method !== undefined && method !== 'get') {
		return (
			<InertiaLink href={ href } onClick={ e => e.preventDefault() }>
				<Button onClick={ handleHTTP }>{ children }</Button>
			</InertiaLink>
		)
	}

	const asButton = as === 'button'
	return (
		<Anchor component={ InertiaLink } href={ href } { ...props } as={ asButton ? 'a' : as }>
			{ asButton ? <Button>{ children }</Button> : children }
		</Anchor>
	)
}

export default InertiaLinkComponent
