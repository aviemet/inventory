import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Link } from '@/Components'

type LinkStory = StoryObj<typeof Link>

const meta: Meta<typeof Link> = {
	title: 'Example/Link',
	component: Link,
	argTypes: {
	},
}
export default meta

export const Standard: LinkStory = {
	args: {
		href: '',
	},
	render: args => <Link { ...args } />,
}
