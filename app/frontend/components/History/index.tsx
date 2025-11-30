import { Timeline } from "@mantine/core"

import { buildTimelineData } from "./Content"

interface HistoryProps {
	assignments?: Schema.Assignment[]
	activities?: Schema.Activity[]
}

export function History({ assignments, activities }: HistoryProps) {
	return (
		<>
			{ activities &&
				<Timeline active={ activities.length } bulletSize={ 24 }>
					{ activities.map(activity => {
						const timelineData = buildTimelineData(
							activity,
							assignments?.find(assignment => assignment.id === activity.trackable_id),
						)

						return (
							<Timeline.Item
								key={ activity.id }
								title={ timelineData.title }
								bullet={ timelineData.icon }
								color={ timelineData.color }
								lineVariant={ timelineData.lineStyle }
							>
								{ timelineData.content }
							</Timeline.Item>
						)

					}) }
				</Timeline>
			}
		</>
	)
}
