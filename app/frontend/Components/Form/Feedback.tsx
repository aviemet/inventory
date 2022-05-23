import React from 'react'
import cn from 'classnames'
import { DivProps } from 'react-html-props'
import tw from 'twin.macro'

interface IFeedbackProps extends DivProps{
	errors?: string | string[]
}

const Feedback = ({ errors, ...props }: IFeedbackProps) => {
	return (
		<>
			{ errors && <div
				tw="py-1 px-2 text-alert-dark bg-alert-light"
				{ ...props }
			>
				{ typeof errors === 'string' && errors }
				{ Array.isArray(errors) && <ul>
					{ errors.map((error, i) => <li key={ i }>{ error }</li>) }
				</ul> }
			</div> }
		</>
	)
}

export default Feedback
