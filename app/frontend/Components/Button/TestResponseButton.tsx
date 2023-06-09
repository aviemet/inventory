import React, { useState } from 'react'
import { Button, Group } from '@/Components'
import axios from 'axios'
import useStateMachine from '@cassiozen/usestatemachine'
import { CheckIcon, CrossIcon } from '@/Components/Icons'
import { InfoCircle } from 'tabler-icons-react'
import { Avatar, HoverCard, Text } from '@mantine/core'


interface ITestResponseButtonProps {
	children?: string
	endpoint: string
	method?: HTTPVerb
	data: any
}

const TestResponseButton = ({ children = 'Test', endpoint, method = 'get', data }: ITestResponseButtonProps) => {
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
						<Text size="md" weight={ 700 }>Authentication Failed</Text>
						<Text>{ errorMessage }</Text>
					</HoverCard.Dropdown>
				</HoverCard>
			}
			<Button
				onClick={ handleClick }
				leftIcon={ requestState.context.icon }
				color={ requestState.context.color }
				loading={ requestState.value === 'requesting' }
			>
				{ children }
			</Button>
		</Group>
	)
}

export default TestResponseButton
