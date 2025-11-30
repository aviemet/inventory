import React from "react"

export interface MockLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children?: React.ReactNode
	href?: string
	preserveScroll?: boolean
}

export const mockInertiaLink = ({ children, onClick, preserveScroll, ...props }: MockLinkProps) => {
	return React.createElement("a", {
		...props,
		onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
			e.preventDefault()
			onClick?.(e)
		},
	}, children)
}
