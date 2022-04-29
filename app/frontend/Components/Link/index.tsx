import React from 'react'
import { type InertiaLinkProps } from '@inertiajs/inertia-react'
import { type Method, type Visit } from '@inertiajs/inertia'
import InertiaLink from './InertiaLink'
import ExternalLink from './ExternalLink'

interface LinkProps extends InertiaLinkProps {
	method?: Method
	visit?: Omit<Visit, 'method'>
	external?: boolean
}

const externalPrefix = ['http', 'www']

const Link = ({ children, href, as = 'a', method, visit, external = false, ...props }: LinkProps) => {
	let renderExternal = external

	if(!external) {
		externalPrefix.forEach(prefix => {
			if(href.startsWith(prefix)) {
				renderExternal = true
			}
		})
	}

	return renderExternal ?
		<ExternalLink href={ href }>{ children }</ExternalLink>
		:
		<InertiaLink href={ href } as={ as } method={ method } visit={ visit } { ...props }>{ children }</InertiaLink>
}

export default Link
