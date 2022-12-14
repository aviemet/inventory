import { DynamicInputs, Input } from '@/Components/Form'
import React from 'react'

const Phone = () => {
	return (
		<DynamicInputs emptyData={ {
			number: '',
			extenstion: '',
			notes: '',
			category_id: '',
		} } >{ i => (
				<>
					<Input label="Number" name={ `[${i}]number` } />
					<Input label="Extension" name={ `[${i}]extension` } />
				</>
			) }
		</DynamicInputs>
	)
}

export default Phone
