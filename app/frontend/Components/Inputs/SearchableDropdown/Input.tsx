import React, { forwardRef } from 'react'
import { ExpandIcon } from '@/Components/Icons'
import { InputProps } from 'react-html-props'
import tw, { styled } from 'twin.macro'

interface ISearchableDropdownInputProps extends InputProps {
	label: string
	open: boolean
	handleOpen: () => void
	handleClose: () => void
}

const SearchableDropdown = forwardRef<HTMLInputElement, ISearchableDropdownInputProps>((
	{ value, label, open, handleOpen, handleClose, onChange, id, ...props },
	ref
) => {
	return (
		<>
			<input type="hidden" value={ value } { ...props } />
			<SelectorComponent className="selector">
				<input
					id={ id }
					type="text"
					value={ label }
					onChange={ onChange }
					onFocus={ () => { if(!open) handleOpen() } }
					ref={ ref }
					tw="cursor-pointer m-0 py-1 pl-2 focus:border-brand"
				/>
				<div className="expand-icon" tw="cursor-pointer flex items-center" onClick={ () => { if(open) handleClose() } }>
					<ExpandIcon tw="w-6" />
				</div>
			</SelectorComponent>
		</>
	)
})

export default SearchableDropdown

const SelectorComponent = styled.div`
	${tw`inline-flex justify-center w-full p-1 py-1`}
	${tw`text-sm font-medium text-gray-700 bg-white border border-gray-300 shadow-sm`}
	${tw`hover:(bg-gray-50 text-gray-700)`}

	svg {
		transition: transform 250ms ease-in-out;
	}

	input {
    ${tw`border-white`}
	}
`
