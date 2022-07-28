import React, { forwardRef } from 'react'
import { type Method, type Visit, type Progress } from '@inertiajs/inertia'
import InertiaLink from './InertiaLink'
import ExternalLink from './ExternalLink'
import { type AnchorProps } from '@mantine/core'
import { type BaseInertiaLinkProps } from '@inertiajs/inertia-react'

export interface ILinkProps extends Omit<AnchorProps, 'onClick'|'onProgress'>, Omit<BaseInertiaLinkProps, 'onProgress'> {
	children: React.ReactNode
	href: string
	method?: Method
	visit?: Omit<Visit, 'method'>
	external?: boolean
	compact?: boolean
	as?: 'a'|'button'
	onProgress?: ((progress: Progress) => void) | React.ReactEventHandler<HTMLAnchorElement>
	target: string
	rel: string
}

const externalPrefix = ['http', 'www']

const Link = forwardRef<HTMLAnchorElement, ILinkProps>((
	{ children, href, as = 'a', method, visit, external, onProgress, ...props },
	ref
) => {
	let renderExternal = external

	if(external === undefined) {
		externalPrefix.some(prefix => {
			if(href.startsWith(prefix)) {
				renderExternal = true
			}
		})
	}

	// TODO: Get onProgress back in the props object somehow
	if(renderExternal) {
		return <ExternalLink href={ href } { ...props } ref={ ref }>{ children }</ExternalLink>
	}
	return <InertiaLink href={ href } as={ as } method={ method } visit={ visit } { ...props } ref={ ref }>{ children }</InertiaLink>
})

export default Link
