import React from 'react'
import { Timeline } from '@mantine/core'
import { buildTimelineData } from './Content'

interface IHistoryProps {
	assignments?: Schema.Assignment[]
	activities?: Schema.Activity[]
}

const History = ({ assignments, activities }: IHistoryProps) => {
	// Timeline.Item components cannot be wrapped, so the content has been componentized instead
	// https://mantine.dev/core/timeline/#wrap-timelineitem
	return (
		<>
			{ activities && <Timeline active={ activities.length } bulletSize={ 24 }>
				{ activities.map(activity => {
					const timelineData = buildTimelineData(activity, assignments?.find(assignment => assignment.id === activity.trackable_id))

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
			</Timeline> }
		</>
	)
}

export default History
