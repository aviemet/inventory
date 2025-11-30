import { useMantineColorScheme } from "@mantine/core"
import { spotlight } from "@mantine/spotlight"
import React from "react"

import { ActionIcon, Tooltip, Kbd } from "@/components"
import { SearchIcon } from "@/components/Icons"
import { useOs } from "@/lib/hooks"

const GlobalSearchButton = () => {
	const os = useOs()
	const { colorScheme } = useMantineColorScheme()

	const modifier = os === "macos" ? "⌘" : "ctrl"

	return (
		<Tooltip
			label={ <>
				<Kbd>{ modifier }</Kbd><Kbd>K</Kbd>
			</> }
			openDelay={ 1000 }
			color={ colorScheme === "dark" ? "gray" : undefined }
		>
			<ActionIcon onClick={ spotlight.open }>
				<SearchIcon />
			</ActionIcon>
		</Tooltip>
	)
}

export default GlobalSearchButton
