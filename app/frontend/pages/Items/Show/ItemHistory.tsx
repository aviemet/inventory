import { History } from "@/components"

import { ShowItemProps } from "."

const ItemHistory = ({ item }: ShowItemProps) => {
	return (
		<>
			<History assignments={ item.assignments } activities={ item.activities } />
		</>
	)
}

export default ItemHistory
