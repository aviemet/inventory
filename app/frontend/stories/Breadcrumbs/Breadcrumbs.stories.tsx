import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Breadcrumbs as BreadcrumbsComponent } from '@/Components'

export default {
	title: 'Example/Breadcrumbs',
	component: BreadcrumbsComponent,
	argTypes: {
	},
} as ComponentMeta<typeof BreadcrumbsComponent>

const breadcrumbsArgs = {
}

const BreadcrumbsTemplate: ComponentStory<typeof BreadcrumbsComponent> = (args) => <Breadcrumbs { ...args } />

export const Breadcrumbs = BreadcrumbsTemplate.bind({})
Breadcrumbs.args = breadcrumbsArgs
