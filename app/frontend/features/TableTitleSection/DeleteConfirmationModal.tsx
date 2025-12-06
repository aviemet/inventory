import { Box, Group, Stack, Text } from "@mantine/core"
import React from "react"

import { Button, Modal } from "@/components"

interface DeleteConfirmationModalProps {
	opened: boolean
	onClose: () => void
	onConfirm: () => void
	selectedRecords: readonly { id: string }[]
}

const DeleteConfirmationModal = ({ opened, onClose, onConfirm, selectedRecords }: DeleteConfirmationModalProps) => {
	return (
		<Modal
			opened={ opened }
			onClose={ onClose }
			title="Confirm Deletion"
			centered
		>
			<Stack gap="md">
				<Text>
					Are you sure you want to permanently delete { selectedRecords.length } { selectedRecords.length === 1 ? "record" : "records" }? This action cannot be undone.
				</Text>

				{ selectedRecords.length > 0 && (
					<Box>
						<Text size="sm" fw={ 500 } mb="xs">Selected items:</Text>
						<Stack gap="xs" style={ { maxHeight: "300px", overflowY: "auto" } }>
							{ selectedRecords.map((record) => {
								const name = "name" in record && typeof record.name === "string" ? record.name : null
								const assetTag = "asset_tag" in record && typeof record.asset_tag === "string" ? record.asset_tag : null
								const displayName = name || assetTag || `ID: ${record.id}`

								return (
									<Text key={ record.id } size="sm" c="dimmed">
										{ displayName }
									</Text>
								)
							}) }
						</Stack>
					</Box>
				) }

				<Group justify="flex-end" mt="md">
					<Button variant="subtle" onClick={ onClose }>
						Cancel
					</Button>
					<Button color="red" onClick={ onConfirm }>
						Delete Permanently
					</Button>
				</Group>
			</Stack>
		</Modal>
	)
}

export default DeleteConfirmationModal
