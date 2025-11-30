import {
	ActionIcon,
	Paper,
	Transition,
	useMantineTheme,
	rem,
	Tooltip,
	Box,
} from "@mantine/core"
import { useClickOutside } from "@mantine/hooks"
import clsx from "clsx"
import React, { useState } from "react"

import { DoubleDownArrowIcon, FilterIcon } from "@/components/Icons"
import { useBooleanToggle } from "@/lib/hooks"

import * as classes from "./AdvancedSearch.css"

const scaleY = {
	in: { opacity: 1, transform: "scaleY(1)" },
	out: { opacity: 0, transform: "scaleY(0)" },
	common: { transformOrigin: "top" },
	transitionProperty: "transform, opacity",
}

interface AdvancedSearchProps {
	children: React.ReactNode
}

export function AdvancedSearch({ children }: AdvancedSearchProps) {
	const [opened, toggle] = useBooleanToggle(false)
	const [ref, setRef] = useState<HTMLDivElement | null>(null)
	const theme = useMantineTheme()

	useClickOutside(() => toggle(false), null, [ref])

	return (
		<Box ref={ setRef } pos="relative">
			<Tooltip label="Advanced Search">
				<ActionIcon
					variant="subtle"
					color="gray"
					size="lg"
					onClick={ () => toggle() }
					aria-label="Advanced Search"
				>
					<FilterIcon size={ 24 } />
				</ActionIcon>
			</Tooltip>
			<Transition mounted={ opened } transition={ scaleY } duration={ 200 } timingFunction="ease">
				{ (styles) => (
					<Paper
						shadow="md"
						p="md"
						withBorder
						className={ clsx(classes.paper) }
						style={ {
							...styles,
							position: "absolute",
							top: "100%",
							left: 0,
							zIndex: 1000,
							minWidth: rem(300),
							marginTop: theme.spacing.xs,
						} }
					>
						<Box mb="md">
							<ActionIcon
								variant="subtle"
								color="gray"
								size="sm"
								onClick={ () => toggle(false) }
								style={ { position: "absolute", top: rem(8), right: rem(8) } }
							>
								<DoubleDownArrowIcon size={ 16 } />
							</ActionIcon>
						</Box>
						{ children }
					</Paper>
				) }
			</Transition>
		</Box>
	)
}
