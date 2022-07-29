import React, { forwardRef } from 'react'
import { InertiaLink, type BaseInertiaLinkProps } from '@inertiajs/inertia-react'
import { Anchor, type AnchorProps, type ButtonProps } from '@mantine/core'
import { Button } from '@/Components'
import { Inertia, Method, Visit } from '@inertiajs/inertia'

interface LinkProps extends Omit<AnchorProps, 'href'>, BaseInertiaLinkProps {
	children: React.ReactNode
	href: string
	as: 'a'|'button'
	method?: Method
	visit?: Omit<Visit, 'method'>
	external?: boolean
	compact?: boolean
}

const InertiaLinkComponent = forwardRef<HTMLAnchorElement, LinkProps>((
	{ children, href, as = 'a', method, visit, external = false, compact, color, ...props },
	ref
) => {
	const handleHTTP = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		Inertia.visit(href, {
			method,
			...visit
		})
	}

	const buttonProps: Partial<ButtonProps> = {}
	if(color) buttonProps.color = color

	// Only present standard GET requests as anchor tags, all others as buttons
	if(method !== undefined && method !== 'get') {
		return (
			<Anchor component={ InertiaLink } href={ href } onClick={ e => e.preventDefault() }>
				<Button { ...buttonProps } onClick={ handleHTTP }>{ children }</Button>
			</Anchor>
		)
	}

	const asButton = as === 'button'
	return (
		<Anchor component={ InertiaLink } href={ href } { ...props } as={ asButton ? 'a' : as } ref={ ref }>
			{ asButton ? <Button { ...buttonProps } compact={ compact }>{ children }</Button> : children }
		</Anchor>
	)
})

export default InertiaLinkComponent
