import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button, {
	EditButton,
	CheckinButton,
	CheckoutButton,
	DeleteButton,
	ModalFormButton,
	ToggleColorSchemeButton,
} from '@/Components/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		loaderPosition: {
			options: ['left', 'right']
		},
		radius: {
			options: ['xs', 'sm', 'md', 'lg', 'xl']
		},
		size: {
			options: ['xs', 'sm', 'md', 'lg', 'xl']
		},
		variant: {
			options: [undefined, 'outline', 'white', 'light', 'default', 'filled', 'subtle', 'gradient']
		}
	},
} as ComponentMeta<typeof Button>

const buttonArgs = {
	children: 'Button',
	size: undefined,
	compact: false,
	disabled: false,
	fullWidth: false,
	loading: false,
	loaderPosition: undefined,
	radius: undefined,
	uppercase: false,
	variant: undefined,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button { ...args } />

export const Standard = ButtonTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = buttonArgs

const EditButtonTemplate: ComponentStory<typeof Button> = (args) => <EditButton { ...args } />
export const Edit = EditButtonTemplate.bind({})
Edit.args = {
	href: '/home'
}
