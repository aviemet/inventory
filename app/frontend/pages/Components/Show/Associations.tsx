
import { ShowPageAssociations } from "@/features"
import { Routes } from "@/lib"

import { ShowComponentProps } from "."

const Associations = ({ component }: ShowComponentProps) => {
	return <ShowPageAssociations assignable={ component } checkinRoute={ Routes.checkinComponent } />
}

export default Associations
