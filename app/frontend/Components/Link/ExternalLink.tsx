import React from 'react'
import normalizeUrl from 'normalize-url'
import { ExternalLinkIcon } from '@/Components/Icons'
import { Anchor, type AnchorProps } from '@mantine/core'

interface IExternalLinkProps extends AnchorProps<'a'> {
	href: string
	as?: 'a'|'button'
}

const ExternalLink = ({ children, href, as, ...props }: IExternalLinkProps) => {
	const url = normalizeUrl(href, { stripWWW: false })

	return (
		<Anchor
			href={ url }
			target="_blank"
			rel="noreferrer"
			styles={ {
				display: 'inline-block',

				'.react-icon.external': {
					display: 'inline-block',
					verticalAlign: 'text-top',
				}
			} }
			{ ...props }
		>
			{ children }
			<ExternalLinkIcon className="external" />
		</Anchor>
	)
}

export default ExternalLink
