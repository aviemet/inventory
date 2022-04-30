import React, { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react'
import cx from 'classnames'
import tw, { styled } from 'twin.macro'

interface ISearchableDropdownOptionsProps {
	options: Array<Record<string, any>>
	filterTerms: string
	activeOption: any
	getValue: Function
	getLabel: Function
	handleChoice: Function
	filterMatchKeys?: string[]
	shouldFilter: boolean
}

const SearchableDropdown = forwardRef<HTMLDivElement, ISearchableDropdownOptionsProps>((
	{ options, filterTerms, activeOption, getValue, getLabel, handleChoice, filterMatchKeys, shouldFilter },
	ref: React.ForwardedRef<HTMLDivElement>
) => {
	const internalRef = useRef<HTMLDivElement>(null)

	useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => internalRef.current)

	const filterByKeys = (option) => {
		for(const key in filterMatchKeys) {
			if(option.hasOwnProperty(filterMatchKeys[key]) && option[filterMatchKeys[key]].toLowerCase().includes(filterTerms)) {
				return true
			}
		}
	}

	const filterByLabel = (option) => {
		const optionLabel = String(getLabel(option)).toLowerCase()
		const optionValue = String(getValue(option)).toLowerCase()

		return optionLabel.includes(filterTerms) || optionValue.includes(filterTerms)
	}

	const optionsFilter = option => {
		return filterMatchKeys ? filterByKeys(option) : filterByLabel(option)
	}

	const filterOptions = options => {
		return shouldFilter ? options.filter(optionsFilter) : options
	}

	const setDefaultActiveOption = () => {
		if(internalRef.current === null || internalRef.current.querySelector('.active')) return
		if(internalRef.current.children.length === 0) return
		internalRef.current.children[0].classList.add('active')
	}

	useLayoutEffect(() => {
		setDefaultActiveOption()
	}, [filterTerms])

	return (
		<div
			className='options'
			ref={ internalRef }
			tw="overflow-y-auto cursor-default absolute left-0 w-full max-h-56 shadow-lg bg-white"
		>
			{ filterOptions(options).map((option, i) => {
				let active = getValue(option) === activeOption

				return (
					<OptionComponent
						key={ getValue(option) }
						data-value={ getValue(option) }
						className={ cx('option', { 'active': active } ) }
						onClick={ () => handleChoice(option) }
					>
						{ getLabel(option) }
					</OptionComponent>
				)
			}) }
		</div>
	)
})

export default SearchableDropdown

const OptionComponent = styled.div`
	${tw`hover:text-gray-900 px-4 py-2 text-sm text-gray-700`}

	&.active {
		${tw`bg-brand-light`}
	}

	&:not(.active).selected {
		${tw`bg-gray-100`}
	}

	&:not(.active):hover {
		${tw`bg-gray-50`}
	}

`
