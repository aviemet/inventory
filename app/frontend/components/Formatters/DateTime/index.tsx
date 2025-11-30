import React from "react"
import { isEmpty } from "lodash-es"

import { Stack, Tooltip } from "@/components"
import { formatter } from "@/lib"

import { ConditionalWrapper } from "../../ConditionalWrapper"

interface DateTimeFormatterProps {
	children: string | Date | undefined
	format?: keyof typeof formatter["datetime"]
	tooltipFormats?: (keyof typeof formatter["datetime"])[]
	tooltipOptions?: Omit<React.ComponentProps<typeof Tooltip>, "children" | "label">
}

export function DateTimeFormatter({
	children,
	format = "dateShort",
	tooltipFormats,
	tooltipOptions,
}: DateTimeFormatterProps) {
	if(!children) return <></>

	return (
		<>
			<ConditionalWrapper
				condition={ !isEmpty(tooltipFormats) }
				wrapper={ innerChildren => {
					const tooltipProps = Object.assign({}, tooltipOptions, {
						position: "bottom",
						openDelay: 750,
					})
					return (
						<Tooltip
							{ ...tooltipProps }
							label={ <Stack>{ tooltipFormats!.map(f => (
								<time
									key={ f }
									dateTime={ children.toString() }
								>
									{ formatter.datetime[f](children) }
								</time>
							)) }</Stack> }
						>
							{ innerChildren }
						</Tooltip>
					)
				} }
			>
				<time dateTime={ children.toString() }>{ formatter.datetime[format](children) }</time>
			</ConditionalWrapper>
		</>
	)
}

