import { createContext } from "@/lib/hooks"

interface TableSectionContextProvider {
	section: "head" | "body" | "footer"
}

const [useTableSectionContext, TableSectionContextProvider] = createContext<TableSectionContextProvider>()
export { useTableSectionContext, TableSectionContextProvider }
