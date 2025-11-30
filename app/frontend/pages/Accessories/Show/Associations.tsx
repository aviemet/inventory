import React from "react"

import { ShowPageAssociations } from "@/features"
import { Routes } from "@/lib"

import { ShowAccessoryProps } from "."

const Associations = ({ accessory }: ShowAccessoryProps) => {
	return <ShowPageAssociations assignable={ accessory } checkinRoute={ Routes.checkinAccessory } />
}

export default Associations
