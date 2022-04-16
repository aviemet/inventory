import React from 'react'
import cx from 'classnames'
import { DivProps } from 'react-html-props'

interface IFeedbackProps extends DivProps{
	errors?: string | string[]
}

const Feedback = ({ errors, className, ...props }: IFeedbackProps) => {
	return (
		<>
			{ errors && <div className={ cx('feedback', className) } { ...props }>
				{ typeof errors === 'string' && errors }
				{ Array.isArray(errors) && <ul>
					{ errors.map((error, i) => <li key={ i }>{ error }</li>) }
				</ul> }
			</div> }
		</>
	)
}

export default Feedback