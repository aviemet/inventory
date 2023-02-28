import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
	wrapper: {
		overflow: 'auto',
		height: `calc(100vh - ${theme.other.header.height}px - ${theme.other.footer.height}px)`,
	},
}))
