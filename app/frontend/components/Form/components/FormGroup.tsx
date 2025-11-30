import clsx from "clsx"
import { DivProps } from "react-html-props"
import { NestedFields } from "use-inertia-form"

import { ConditionalWrapper, Grid, Box } from "@/components"

import { useFormFormat } from "../Form"

interface FormGroupProps extends DivProps {
	legend?: string
	outline?: boolean
	model?: string
	grid?: boolean
}

export function FormGroup({ children, legend, outline = true, model, grid = true }: FormGroupProps) {
	const { disableFormatting } = useFormFormat()
	const shouldUseGrid = grid && !disableFormatting

	return (
		<ConditionalWrapper
			condition={ shouldUseGrid }
			wrapper={ children => (
				<Grid.Col>
					<Grid component="fieldset" className={ clsx({ outline }) } style={ {
						marginTop: legend ? "0.5rem" : undefined,
					} }>
						{ children }
					</Grid>
				</Grid.Col>
			) }
			elseWrapper={ children => (
				<Box component="fieldset" className={ clsx({ outline }) } style={ {
					marginTop: legend ? "0.5rem" : undefined,
				} }>
					{ children }
				</Box>
			) }
		>
			<ConditionalWrapper
				condition={ model !== undefined }
				wrapper={ children => <NestedFields model={ model! }>{ children }</NestedFields> }
			>
				<>
					{ legend && <legend>{ legend }</legend> }
					{ children }
				</>
			</ConditionalWrapper>
		</ConditionalWrapper>
	)
}
