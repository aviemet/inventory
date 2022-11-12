import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Section as SectionComponent } from '@/Components'

export default {
	title: 'Example/Section',
	component: SectionComponent,
	argTypes: {
	},
} as ComponentMeta<typeof SectionComponent>

const sectionArgs = {
}

const SectionTemplate: ComponentStory<typeof SectionComponent> = (args) => <Section { ...args } />

export const Section = SectionTemplate.bind({})
Section.args = sectionArgs
