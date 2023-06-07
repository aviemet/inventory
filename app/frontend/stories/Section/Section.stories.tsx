import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Section as Section } from '@/Components'

type SectionStory = StoryObj<typeof Section>

const meta: Meta<typeof Section> = {
	title: 'Example/Section',
	component: Section,
	argTypes: {
	},
}
export default meta

export const Standard: SectionStory = {
	render: args => <Section { ...args } />,
}
