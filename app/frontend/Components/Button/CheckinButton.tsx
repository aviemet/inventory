import React from 'react'
import { Link } from '@/Components'
import { type ILinkProps } from '../Link'
import { CheckinIcon } from '@/Components/Icons'
import { Tooltip } from '@mantine/core'

interface ICheckinButtonProps extends Omit<ILinkProps, 'children'> {
	href: string
	disabled?: boolean
	tooltipMessage?: string | false | null
}

const color = 'cyan'

const CheckinButton = ({ href, disabled, tooltipMessage, ...props }: ICheckinButtonProps) => {
	const finalProps = props
	if(disabled) {
		finalProps.buttonProps = {
			disabled: true,
		}
	}

	return (
		<Tooltip withArrow label={ tooltipMessage || 'Check In' } position="left" transition="fade" color={ color }>
			<Link as="button" compact href={ href } color={ color } size="md" p={ 0 } { ...finalProps }><CheckinIcon /></Link>
		</Tooltip>
	)
}

export default CheckinButton
