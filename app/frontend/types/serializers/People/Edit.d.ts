// TypesFromSerializers CacheKey 65a96197487f4e565aab3ae5e479fbb4
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type ContactsFormData from '../Contacts/FormData'
import type DepartmentsOptions from '../Departments/Options'
import type PeopleOptions from './Options'
import type PeopleFormDataSerializerPersonUserFormData from './FormDataSerializer/PersonUserFormData'

declare global {
  namespace Schema {
    interface PeopleEdit {
      id: number
      active: boolean
      contact?: ContactsFormData
      department?: DepartmentsOptions
      department_id: unknown
      employee_number?: string
      first_name: string
      job_title?: string
      last_name: string
      location_id?: number
      manager?: PeopleOptions
      manager_id?: number
      middle_name?: string
      name: string
      user?: PeopleFormDataSerializerPersonUserFormData
      user_id?: number
    }
  }
}
