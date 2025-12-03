import { ShowPageAssociations } from "@/features"
import { Routes } from "@/lib"

import { ShowLicenseProps } from "."

const Associations = ({ license }: ShowLicenseProps) => {
	return <ShowPageAssociations assignable={ license } checkinRoute={ Routes.checkinLicense } />
}

export default Associations
