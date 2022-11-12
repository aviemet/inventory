import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Link as LinkComponent } from '@/Components'

export default {
	title: 'Example/Link',
	component: LinkComponent,
	argTypes: {
	},
} as ComponentMeta<typeof LinkComponent>

const linkArgs = {
}

const LinkTemplate: ComponentStory<typeof LinkComponent> = (args) => <Link { ...args } />

export const Link = LinkTemplate.bind({})
Link.args = linkArgs
