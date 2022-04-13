import React from 'react'
import { Form, Input, Textarea, SearchableDropdown, Checkbox, Submit } from '@/Components/Form'
import { Link } from '@/Components'
import { Routes } from '@/lib'
import { useAuth } from '@/Providers'

export interface IItemFormProps {
	item: Schema.Item
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const ItemForm = ({ item, models, vendors, locations }: IItemFormProps) => {
	const { user } = useAuth()
	const defaultData = item

	const handleSubmit = ({ transform, wasSuccesful }) => {
		transform(data => {
			console.log({ data })
			return {
				item: {
				},
				company: user.active_company_id
			}
		})
	}

	console.log({ user, defaultData })

	return (
		<Form model="item" data={ defaultData } to={ Routes.newItem() } onSubmit={ handleSubmit } className="max-w-5xl">

			<Input name="name" label="Name" required />

			<Input name="asset_tag" label="Asset Tag" />

			<Input name="serial" label="Serial" />

			<Textarea name="notes" label="Notes" />

			<SearchableDropdown
				label="Model"
				name="model"
				options={ models }
				getLabel={ option => option.name }
				getValue={ option => option.id }
			/>

			<div className="field string required item_name">
				<label className="string required" htmlFor="item_name">Name</label>
				<div className="input">
					<input className="string required" type="text" name="item[name]" id="item_name" />
				</div>
				<div className="feedback">
				</div>
			</div>

			<div className="field string optional item_asset_tag">
				<label className="string optional" htmlFor="item_asset_tag">Asset tag
				</label>
				<div className="input">
					<input className="string optional" type="text" name="item[asset_tag]" id="item_asset_tag"/>
				</div>
				<div className="feedback">
				</div>
			</div>
			<div className="field string optional item_serial">
				<label className="string optional" htmlFor="item_serial">Serial
				</label>
				<div className="input">
					<input className="string optional" type="text" name="item[serial]" id="item_serial"/>
				</div>
				<div className="feedback">
				</div>
			</div>
			<div className="field select required item_model">
				<label className="select required" htmlFor="item_model_id">Model
				</label>
				<div className="input">
					<div className="dropdown-search" >
						<div className="input">
							<input className="hidden" type="hidden" name="item[model_id]" id="item_model_id"/>
						</div>
						<div className="feedback">
						</div>
						<div className="selector">
							<input type="text"/>
							<i className="material-icons cursor-pointer expand">expand_more
							</i>
							<i className="material-icons cursor-pointer contract">expand_less
							</i>
						</div>
						<div className="options" id="options-a8d73bfa">
						</div>
					</div>
				</div>
				<div className="feedback">
				</div>
			</div>
			<div className="field select optional item_vendor">
				<label className="select optional" htmlFor="item_vendor_id">Vendor
				</label>
				<div className="input">
					<div className="dropdown-search">
						<div className="input">
							<input className="hidden" type="hidden" name="item[vendor_id]" id="item_vendor_id"/>
						</div>
						<div className="feedback">
						</div>
						<div className="selector">
							<input type="text"/>
							<i className="material-icons cursor-pointer expand">expand_more
							</i>
							<i className="material-icons cursor-pointer contract">expand_less
							</i>
						</div>
						<div className="options" id="options-b26eda56">
						</div>
					</div>
				</div>
				<div className="feedback">
				</div>
			</div>
			<div className="field currency optional item_cost">
				<label className="currency optional" htmlFor="item_cost">Cost
				</label>
				<div className="input">
					<div className="icon">$
					</div>
					<input className="currency optional" type="text" name="item[cost]" id="item_cost"/>
				</div>
				<div className="feedback">
				</div>
			</div>
			<div className="field datetime optional item_purchased_at">
				<label className="datetime optional" htmlFor="item_purchased_at_1i">Purchased at
				</label>
				<div className="input">
					<input className="datetime optional flatpickr-input" value="" type="hidden" name="item[purchased_at]" id="item_purchased_at"/>
					<input className="datetime optional form-control input" placeholder="" tabIndex={ 0 } type="text"/>
				</div>
				<div className="feedback">
				</div>
			</div>
			<div className="field select optional item_default_location">
				<label className="select optional" htmlFor="item_default_location_id">Default location
				</label>
				<div className="input">
					<div className="dropdown-search">
						<div className="input">
							<input className="hidden" type="hidden" name="item[default_location_id]" id="item_default_location_id"/>
						</div>
						<div className="feedback">
						</div>
						<div className="selector">
							<input type="text"/>
							<i className="material-icons cursor-pointer expand">expand_more
							</i>
							<i className="material-icons cursor-pointer contract">expand_less
							</i>
						</div>
						<div className="options" id="options-5a6d2706">
						</div>
					</div>
				</div>
				<div className="feedback">
				</div>
			</div>
			<div>
				<template >
					<div className="fields">
						<div className="field inet optional item_nics_ips_address">
							<label className="inet optional" htmlFor="item_nics_attributes_0_ips_attributes_0_address">IP Address
							</label>
							<div className="input">
								<input className="inet optional" type="text" name="item[nics_attributes][0][ips_attributes][0][address]" id="item_nics_attributes_0_ips_attributes_0_address"/>
							</div>
							<div className="feedback">
							</div>
						</div>
						<div className="field select required item_nics_nic_type">
							<label className="select required" htmlFor="item_nics_attributes_0_nic_type">Nic type
							</label>
							<div className="input">
								<div className="select-wrapper">
									<select className="select required" name="item[nics_attributes][0][nic_type]" id="item_nics_attributes_0_nic_type">
										<option value="" label=" ">

										</option>

										<option value="ethernet">Ethernet
										</option>

										<option value="wifi">Wifi
										</option>

										<option value="fiber">Fiber
										</option>
									</select>
								</div>
							</div>
							<div className="feedback">
							</div>
						</div>
						<div className="field macaddr optional item_nics_mac">
							<label className="macaddr optional" htmlFor="item_nics_attributes_0_mac">Mac
							</label>
							<div className="input">
								<input className="macaddr optional" type="text" name="item[nics_attributes][0][mac]" id="item_nics_attributes_0_mac"/>
							</div>
							<div className="feedback">
							</div>
						</div>
					</div>
				</template>
				<fieldset>
					<legend>NICs and IPs
					</legend>
				</fieldset>
				<div >
					<button type="button">+
					</button>
				</div>
			</div>
			<div className="field text optional item_notes">
				<label className="text optional" htmlFor="item_notes">Notes
				</label>
				<div className="input">
					<textarea className="text optional" name="item[notes]" id="item_notes">
					</textarea>
				</div>
				<div className="feedback">
				</div>
			</div>
			<div className="field boolean optional item_requestable field_without_errors">
				<label className="boolean optional" htmlFor="item_requestable">Requestable
				</label>
				<div className="input">
					<input value="0" type="hidden" name="item[requestable]"/>
					<label className="checkbox">
						<input className=" is-valid boolean optional" type="checkbox" value="1" name="item[requestable]" id="item_requestable"/>
					</label>
				</div>
				<div className="feedback">
				</div>
			</div>
			<Submit className="w-full">Create Item</Submit>

		</Form>
	)
}

export default ItemForm

/**
  	<form className="simple_form new_item" id="new_item" noValidate action="/hardware" acceptCharset="UTF-8" method="post">
		</form>
 */