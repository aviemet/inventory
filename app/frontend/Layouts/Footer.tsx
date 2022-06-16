import React from 'react'
import { Footer } from '@mantine/core'

const FooterComponent = () => {
	return (
		<Footer height={ 35 } p="xs">
			<div className="flex flex-row-reverse text-gray-600">
				©{ (new Date).getFullYear() }
			</div>
		</Footer>
	)
}

export default FooterComponent

