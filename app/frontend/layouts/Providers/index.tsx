import "./reset.css"
import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"
import "@mantine/spotlight/styles.css"
import "./global.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import dayjs from "dayjs"
import calendar from "dayjs/plugin/calendar"
import duration from "dayjs/plugin/duration"
import localizedFormat from "dayjs/plugin/localizedFormat"
import relativeTime from "dayjs/plugin/relativeTime"
import utc from "dayjs/plugin/utc"
import React from "react"

import IconProvider from "./IconProvider"
import UiFrameworkProvider from "./UiFrameworkProvider"

dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)
dayjs.extend(calendar)
dayjs.extend(duration)
dayjs.extend(utc)

interface ProviderProps {
	children?: React.ReactNode
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 30000,
		},
	},
})

const Providers = React.memo(({ children }: ProviderProps) => {
	return (
		<QueryClientProvider client={ queryClient }>
			{ import.meta.env.DEV && <ReactQueryDevtools buttonPosition="bottom-right" /> }
			<UiFrameworkProvider>
				<IconProvider>
					{ children }
				</IconProvider>
			</UiFrameworkProvider>
		</QueryClientProvider>
	)
})

export default Providers
