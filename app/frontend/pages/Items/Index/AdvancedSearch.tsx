import { Button, Box, Group, Flex, Link } from "@/components"
import { CrossIcon, SearchIcon } from "@/components/Icons"
import { CurrencyInput, TextInput } from "@/components/Inputs"
import { useAdvancedSearch, SearchDateInput, SearchDateTypeInput } from "@/components/Table"
import {
	DepartmentsDropdown,
	ManufacturersDropdown,
	VendorsDropdown,
	ModelsDropdown,
	CategoriesDropdown,
} from "@/features/Dropdowns"


const AdvancedItemsSearch = () => {
	const advancedSearch = useAdvancedSearch([
		{ name: "name" },
		{ name: "model" },
		{ name: "asset_tag" },
		{ name: "serial" },
		{ name: "category[id]" },
		{ name: "manufacturer[id]" },
		{ name: "vendor[id]" },
		{ name: "cost" },
		{ name: "department[id]" },
		{ name: "created_at", type: "date" },
	])

	const { inputProps, setInputValue, link, reset } = advancedSearch

	return (
		<>
			<Flex gap="md" mb="md">
				<Box style={ { flex: 1 } }>
					<Group grow>
						<TextInput
							clearable
							label="Name"
							{ ...inputProps("name") }
							onChange={ e => setInputValue("name", e.target.value) }
						/>
						<CategoriesDropdown
							{ ...inputProps("category[id]") }
							onChange={ value => setInputValue("category[id]", value) }
							categorizable_type="Item"
						/>
					</Group>
					<Group grow>
						<ModelsDropdown
							modelCategory="Item"
							{ ...inputProps("model") }
							onChange={ value => setInputValue("model", value) }
						/>
						<ManufacturersDropdown
							{ ...inputProps("manufacturer[id]") }
							onChange={ value => setInputValue("manufacturer[id]", value) }
						/>
					</Group>
					<Group grow>
						<VendorsDropdown
							{ ...inputProps("vendor[id]") }
							onChange={ value => setInputValue("vendor[id]", value) }
						/>
						<DepartmentsDropdown
							{ ...inputProps("department[id]") }
							onChange={ value => setInputValue("department[id]", value) }
						/>
					</Group>
					<Group grow>
						<TextInput
							clearable
							label="Asset Tag"
							{ ...inputProps("asset_tag") }
							onChange={ e => setInputValue("asset_tag", e.target.value) }
						/>
						<TextInput
							clearable
							label="Serial"
							{ ...inputProps("serial") }
							onChange={ e => setInputValue("serial", e.target.value) }
						/>
						<CurrencyInput
							label="Cost"
							{ ...inputProps("cost") }
							onChange={ value => setInputValue("cost", value) }
						/>
					</Group>
				</Box>
				<Box style={ { minWidth: "17rem" } }>
					<SearchDateTypeInput advancedSearch={ advancedSearch } name="created_at" />
					<SearchDateInput advancedSearch={ advancedSearch } name="created_at" />
				</Box>
			</Flex>

			<Group grow>
				<Button onClick={ reset } leftSection={ <CrossIcon /> }>Clear</Button>

				<Link
					as="button"
					href={ link }
					buttonProps={ { leftSection: <SearchIcon /> } }
					style={ { width: "100%" } }
				>
					Search
				</Link>
			</Group>
		</>
	)
}

export default AdvancedItemsSearch

