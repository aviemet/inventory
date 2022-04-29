import React from 'react'

interface IVendorIndexProps {
	vendors: Schema.Vendor[]
}

const Index = ({ vendors }: IVendorIndexProps) => {
	console.log({ vendors })

	return (
		<div>Index</div>
	)
}

export default Index
