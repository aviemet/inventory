import React, { useRef } from 'react'
import { DoubleDownArrowIcon } from '@/Components/Icons'
import { ActionIcon, Paper, Transition, useMantineTheme, rem, px } from '@mantine/core'
import { useLayoutStore } from '@/Layouts/Providers'
import { useBooleanToggle } from '@/lib/hooks'
import { useClickOutside } from '@mantine/hooks'

const scaleY = {
	in: { opacity: 1, transform: 'scaleY(1)' },
	out: { opacity: 0, transform: 'scaleY(0)' },
	common: { transformOrigin: 'top' },
	transitionProperty: 'transform, opacity',
}

const AdvancedSearch = () => {
	const { sidebarOpen } = useLayoutStore()
	const { other: { navbar: { width } } } = useMantineTheme()
	const [open, toggleOpen] = useBooleanToggle(false)
	const iconRef = useRef<HTMLButtonElement>(null)
	const navBarWidth = width[sidebarOpen ? 'open' : 'closed']
	// const clickOutsideRef = useClickOutside(() => toggleOpen(false))

	return (
		<>
			<ActionIcon size={ 42 } variant="filled" color="primary" onClick={ () => toggleOpen() } ref={ iconRef }>
				<DoubleDownArrowIcon size={ 24 } />
			</ActionIcon>
			<Transition mounted={ open } transition={ scaleY } duration={ 200 } timingFunction="ease">
				{ (styles) => (
					<Paper
						shadow="md"
						p="md"
						style={ {
							...styles,
							position: 'absolute',
							left: rem(navBarWidth + px('1rem')),
							right: '1rem',
							height: rem(120),
							top: iconRef.current ? rem(iconRef.current.getBoundingClientRect().bottom + 10) : undefined,
							zIndex: 9999,
						} }
					>
            Dropdown
					</Paper>
				) }
			</Transition>
		</>
	)
}

export default AdvancedSearch
