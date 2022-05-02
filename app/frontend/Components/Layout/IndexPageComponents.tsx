import React from 'react'
import { Popover, Divider, Option } from '@/Components/Popover'
import tw from 'twin.macro'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'

export const TableSection = ({ children }) => (
	<section tw="flex flex-col h-full">
		{ children }
	</section>
)

export const TableTitleSection = ({ title, model, popover }) => (
	<div className="flex items-center justify-between">
		<h1 className="md:inline-block md:flex-1 md:align-middle align-text-top">{ title }</h1>
		<div className="md:flex-1 flex">
			<Table.SearchInput model={ model } />

			<div className="inline-block w-10 p-1">
				{ popover }
			</div>

		</div>
	</div>
)
