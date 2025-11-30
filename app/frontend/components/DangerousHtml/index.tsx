import { Box, type BoxProps } from "@mantine/core"

interface DangerousHtmlProps extends BoxProps {
	children?: string | null
}

export function DangerousHtml({ children, ...props }: DangerousHtmlProps) {
	return (
		<Box { ...props } dangerouslySetInnerHTML={ { __html: children || "" } } />
	)
}
