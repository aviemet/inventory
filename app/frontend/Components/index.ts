export { default as Button } from './Button'
export { default as Card } from './Card'
export { default as ConditionalWrapper } from './ConditionalWrapper'
export { default as Flex } from './Flex' // TODO: Remove and refactor
export { default as Heading } from './Heading'
export { default as History } from './History'
export { default as Link } from './Link'
export { default as Menu } from './Menu'
export { default as Section } from './Section'
export { default as Table } from './Table'
export { default as Tabs } from './Tabs'
export { default as Tile } from './Tile'

// Export UI library components as a proxy to allow easy refactoring
export {
	Box,
	Badge,
	Container,
	Group,
	Modal,
	Stack,
	List,
	ThemeIcon as Icon,
} from '@mantine/core'
