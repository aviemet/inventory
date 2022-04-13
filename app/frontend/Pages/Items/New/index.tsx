import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import ItemForm, { type IItemFormProps } from '../Form'
import { useAuth } from '@/Providers'

interface INewItemProps extends IItemFormProps {}

const New = ({ ...models }: INewItemProps) => {
	const title = 'New Hardware Asset'

	const { user } = useAuth()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<ItemForm { ...models } />
			</section>
		</>
	)
}

export default New
