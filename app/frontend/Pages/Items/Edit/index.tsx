import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import ItemForm, { type IItemFormProps } from '../Form'
import { useAuth } from '@/Providers'

interface INewItemProps extends IItemFormProps {}

const New = ({ item, ...models }: INewItemProps) => {
	const title = `Edit ${item.name}`

	const { user } = useAuth()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<ItemForm item={ item } { ...models } />
			</section>
		</>
	)
}

export default New
