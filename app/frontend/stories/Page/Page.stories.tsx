import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Page as PageComponent } from '@/Components'

export default {
	title: 'Example/Page',
	component: PageComponent,
	argTypes: {
	},
} as ComponentMeta<typeof PageComponent>

const pageArgs = {
}

const PageTemplate: ComponentStory<typeof PageComponent> = (args) => <Page { ...args } />

export const Page = PageTemplate.bind({})
Page.args = pageArgs
