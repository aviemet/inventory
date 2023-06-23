import React from 'react'
import { Box, Grid } from '@mantine/core'
import cx from 'clsx'
import { DivProps } from 'react-html-props'
import ConditionalWrapper from '../ConditionalWrapper'
import { NestedFields } from 'use-inertia-form'
import { useFormFormat } from './Form'

interface IFormGroupProps extends DivProps {
	legend?: string
	outline?: boolean
	model?: string
}

const FormGroup = ({ children, legend, outline = true, model }: IFormGroupProps) => {
	const { grid } = useFormFormat()

	return (
		<Box component='fieldset' className={ cx({ outline }) } sx={ {
			marginTop: legend ? '0.5rem' : undefined,
		} }>
			<ConditionalWrapper
				wrapper={ children => <Grid m={ 0 }>{ children }</Grid> }
				condition={ grid }
			>
				<ConditionalWrapper
					wrapper={ children => <NestedFields model={ model! }>{ children }</NestedFields> }
					condition={ model !== undefined }
				>
					<>
						{ legend && <legend>{ legend }</legend> }
						{ children }
					</>
				</ConditionalWrapper>
			</ConditionalWrapper>
		</Box>
	)
}

export default FormGroup
