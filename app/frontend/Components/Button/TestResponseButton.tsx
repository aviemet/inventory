import React, { useState } from 'react'
import { Button, Group } from '@/Components'
import axios from 'axios'
import useStateMachine from '@cassiozen/usestatemachine'
import { CheckIcon, CrossIcon } from '@/Components/Icons'
import { InfoCircle } from 'tabler-icons-react'
import { Avatar, ButtonProps, HoverCard, Text } from '@mantine/core'


interface TestResponseButtonProps extends ButtonProps {
	children?: string
	endpoint: string
	method?: HTTPVerb
	data: any
}

/**
 * Generic component for testing the response from a remote endpoint
 * Displays success if the endpoint returns a successful response, error upon any errors *
 */
const TestResponseButton = ({ children = 'Test', endpoint, method = 'get', data, ...props }: TestResponseButtonProps) => {
	const [errorMessage, setErrorMessage] = useState('')

	const [requestState, setRequestState] = useStateMachine({
		initial: 'inactive',
		context:{
			icon: <></>,
			color: 'primary',
		},
		states: {
			inactive: {
				on: { requesting: 'requesting' },
				effect({ setContext }) {
					setErrorMessage('')
					setContext(() => ({
						icon: <></>,
						color: 'primary',
					}))
				},
			},
			requesting: {
				on: {
					success: 'success',
					error: 'error',
				},
				effect({ setContext }) {
					setErrorMessage('')
					setContext(() => ({
						icon: <></>,
						color: 'primary',
					}))
				},
			},
			error: {
				on: { requesting: 'requesting' },
				effect({ setContext }) {
					setContext(() => ({
						icon: <CrossIcon />,
						color: 'red',
					}))
				},
			},
			success: {
				on: { requesting: 'requesting' },
				effect({ setContext }) {
					setErrorMessage('')
					setContext(() =>({
						icon:  <CheckIcon />,
						color: 'green',
					}))
				},
			},
		},
	})

	const handleClick = () => {
		setRequestState('requesting')
		axios.request({
			method,
			url: endpoint,
			data,
		})
			.then(response => {
				if(response.data.success) {
					setRequestState('success')
				} else {
					setRequestState('error')
					setErrorMessage(response.data.message)
				}
			})
			.catch(reason => {
				setRequestState('error')
				setErrorMessage(reason)
			})
	}

	return (
		<Group>
			{ requestState.value === 'error' &&
				<HoverCard>
					<HoverCard.Target>
						<Avatar><InfoCircle /></Avatar>
					</HoverCard.Target>
					<HoverCard.Dropdown>
						<Text size="md" fw={ 700 }>Authentication Failed</Text>
						<Text>{ errorMessage }</Text>
					</HoverCard.Dropdown>
				</HoverCard>
			}
			<Button
				onClick={ handleClick }
				leftSection={ requestState.context.icon }
				color={ requestState.context.color }
				loading={ requestState.value === 'requesting' }
				{ ...props }
			>
				{ children }
			</Button>
		</Group>
	)
}

export default TestResponseButton
