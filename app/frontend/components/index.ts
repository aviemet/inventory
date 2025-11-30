export { default as Breadcrumbs } from "./Breadcrumbs"
export { default as Button } from "./Button"
export { default as ConditionalWrapper } from "./ConditionalWrapper"
export { default as DangerousHtml } from "./DangerousHtml"
export { ErrorBoundary, ErrorFallback } from "./Error"
export { default as Flash } from "./Flash"
export { default as History } from "./History"
export { default as Lazy } from "./Lazy"
export { default as Link } from "./Link"
export { default as Menu } from "./Menu"
export { default as Money } from "./Money"
export { default as Page } from "./Page"
export { default as Section } from "./Section"
export { default as Table } from "./Table"
export { default as Tabs } from "./Tabs"
export { default as Tile } from "./Tile"
export { default as RichTextEditor } from "./RichTextEditor"
export { default as Label } from "./Inputs/Label"
export {
	AddressFormatter,
	CurrencyFormatter,
	DateTimeFormatter,
	EmailFormatter,
	PhoneFormatter,
} from "./Formatters"

// Export UI library components as a proxy to allow easy refactoring
export {
	Accordion,
	ActionIcon,
	Anchor,
	AppShell,
	Badge,
	Box,
	Burger,
	Card,
	Container,
	Divider,
	Flex,
	Grid,
	Group,
	Kbd,
	List,
	Modal,
	NumberFormatter,
	Paper,
	Portal,
	SimpleGrid,
	Stack,
	Text,
	Title,
	Tooltip,
	ThemeIcon as Icon,
} from "@mantine/core"
