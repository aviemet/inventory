import { ShowPageAssociations } from "@/features"

import { ShowConsumableProps } from "."

const Associations = ({ consumable }: ShowConsumableProps) => {
	return <ShowPageAssociations assignable={ consumable } />
}

export default Associations
