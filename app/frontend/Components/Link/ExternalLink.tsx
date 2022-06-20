import React from 'react'
import normalizeUrl from 'normalize-url'
import { AProps } from 'react-html-props'
import { ExternalLinkIcon } from '@/Components/Icons'
import { Anchor } from '@mantine/core'
import { styled } from 'twin.macro'

interface IExternalLinkProps extends Omit<AProps, 'href'> {
	href: string
	as?: string
}

const ExternalLink = ({ children, href, as, ...props }: IExternalLinkProps) => {
	const url = normalizeUrl(href, { stripWWW: false })

	return (
		<Anchor href={ url } target="_blank" rel="noreferrer" styles={ {
			display: 'inline-block',
			'.react-icon.external': {
				display: 'inline-block',
				'vertical-align': 'text-top',
			}
		} }>
			{ children }
			<ExternalLinkIcon className="external" />
		</Anchor>
	)
}

export default ExternalLink

const LinkComponent = styled.a`
	display: inline-block;

	.react-icon.external {
		display: inline-block;
		vertical-align: text-top;
	}
`
