import React from 'react'
import { type Method, type Visit } from '@inertiajs/inertia'
import InertiaLink from './InertiaLink'
import ExternalLink from './ExternalLink'
import { type AnchorProps } from '@mantine/core'

export interface ILinkProps extends AnchorProps<'a'> {
	href: string
	method?: Method
	visit?: Omit<Visit, 'method'>
	external?: boolean
	compact?: boolean
	as?: 'a'|'button'
}

const externalPrefix = ['http', 'www']

const Link = ({ children, href, as = 'a', method, visit, external, ...props }: ILinkProps) => {
	let renderExternal = external

	if(external === undefined) {
		externalPrefix.some(prefix => {
			if(href.startsWith(prefix)) {
				renderExternal = true
			}
		})
	}

	return renderExternal ?
		<ExternalLink href={ href } { ...props }>{ children }</ExternalLink>
		:
		<InertiaLink href={ href } as={ as } method={ method } visit={ visit } { ...props }>{ children }</InertiaLink>
}

export default Link
