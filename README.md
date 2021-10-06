# README

## Installation

Postgres and Redis must be installed prior to running

## Application Intention

Asset management for entire asset lifecycle. Track from purchase through active support to deprecation.

Items:

- [x] Check in and out of active inventory
- [x] Assign to person, department or location
- [ ] Designate IP address info

Accessories:

- [ ] Trackable quantity
- [x] Assignable to an asset, person or location
- [x] Check in and out of active inventory

Consumables:

- [ ] "Using" a consumable permanently removes it from inventory
- [ ] Logging of all incoming and outgoing usage

Networks:

- [x] Lists IP addresses of assets
- [x] Tracks structure of local network
  - [x] Notes network infrastructure which defines the network
- [x] Provides a table view of all assets categorized by network segment/address
  - [ ] Paginates large subnets
- [ ] Network calculation tools

Purchases:

- [ ] Purchase order creates an item/consumeable/accessory/component record
  - [ ] Purchase orders for existing consumeables increases inventory count
- [ ] Tracks source, purchase date, cost, category
  - [ ] Optional assignment to GL codes
  - [ ] Optional purchase request generation to be printed or emailed

Licenses:

- [ ] List of licenses by category
- [x] Assignable to an asset
  - [ ] Decrementable in the case of bulk licensing

People:

- [ ] Person records can be pulled from LDAP/AD (not required)
- [x] User accounts reference a person always

Vendors:

- [ ] For item purchasing, service providers and software
- [ ] Tracks company information
  - [ ] Account rep/main contact, support lines and other contact info
- [ ] Links to contracts

Contracts:

- [ ] Tracks contract terms
  - [ ] Start/end dates
  - [ ] Billing cycles and amounts
- [ ] File uploads for signed contracts storage

Companies:

- [x] Top level records
- [x] User permissions related to the company association
- [ ] Brandable (logo, theme)

Locations:

- [x] Tree structure with Company as root

Departments:

- [x] Flat structure under company
- [x] References location (optional)

Help Desk:

- [ ] Email integration
  - [ ] Scans one email address, converts all incoming emails to tickets
  - [ ] Scans sent mail to build full conversation in app
  - [ ] Respond to tickets in app, generates email
  - [ ] Filtering rules for what to ignore
- [ ] Associate tickets with other records
- [ ] Bulk edit/update/close

Documentation:

- [ ] Wiki style living documentation
  - [ ] Links to other records
  - [ ] Revision history
  - [ ] WYSIWYG editor
- [ ] Permissions set at the department level, overridden at the individual level

Software Agents:

- [ ] Agent for Mac, Windows, Linux, iOS, Android
- [ ] Connects to server using API key
- [ ] Periodically reports asset data through REST API endpoints

Table view for all models:

- [x] Hide/Show column tables
  - [ ] persistent per table per user
- [x] Sortable column headings & Pagination
- [ ] Custom fieldsets
- [ ] Search bar filters by all fields, including custom fields

Form view for all models:

- [x] Associated record dropdowns are lazy loaded
- [ ] Associated records have a "New" button next to them

---

## Reference

### Books

Everyday Rails Testing with RSpec

Growing Rails Applications in Practice

[Using Cell for UI Components](https://getflywheel.com/layout/how-to-build-ui-components-in-rails/)

### Sites

[Better Spec](https://www.betterspecs.org/)

### Maybe Useful

[GTIN library for identifying code types](https://github.com/officeluv/gtin_extras)

## Conventions

Use `number_to_currency` for displaying prices. Later we will store the currency as a preference and this will make it possible to easily switch between regions

## Dev Notes

The main difference between an Item and an Accessory or Consumable is that an Item does not have a quantity field. Accessories and Consumables describes items whith an inventory level which can be increased through purchase or manual adjustment. Accessories represent items which generally accompany an asset such as mice (mouses?) and keyboards and can be returned after use. Consumables represent items which disappear after use such as paper or toner.

These differences are represented by three subclasses of the Assignable polymorphic class:

- `Assignable::Single`: Items, no count, can be reassigned.
- `Assignable::Quantity`: Accessories, tracks quantity, can be reassigned.
- `Assignable::Consume`: Consumables, tracks quantity, can not be reassigned.

### Searchable/Sortable and Table Components

This needs to be fully documented, too much going on in the background

### Companies

Companies are essentially top level organizational units. All other objects can be considered to belong to a company with an "Ownership" relationship. Company association is polymorphic, so any forms must use the `form_for` method and handle the assignment in the controller. This could possibly be a method to include in a concern.

### Ownerships

Given that an asset shouldn't belong to more than one company, a Company record is used to scope all items. Everything under the scope of a compnay is considered to be "owned" by that company (yes, even people), defined by a polymorphic Ownership record. An Ownership also contains an optional Department reference so that departmental ownership can live as a top level definition. This way an asset can be assigned outside of its department, but still maintain the relationship of its original owner.

### View Components

View Components should all be namespaced to a folder for each component. However, this adds verbosity, which is addressed by the `view_component_helper`. For instance, to create a "share" button, you would use the generator:

`rails g component Buttons::Share::Share`

This creates the file structure:

    | components
    |\ buttons
    ||\ share
    |||\ share_component.rb
    |||| share_component.html.slim

This can then be used in a view through the helper method `view` as such:

`= view 'buttons/share`

 This syntax is preferable to:

`= render Buttons::Share::ShareCompnent.new`

While the generator syntax looks unpleasant with the repeating component name, using the components becomes much more manageable as the convention allows some inference.

### Decorators

Draper is installed and a decorator object exists for each model, however we don't pass a decorated model to the view from the controller. When the methods in a decorator are needed, you can call `.decorate` on the record in the view template to gain access to its methods.

In views where you only need to use a decorator method once, simply call `decorate` on the object at that line: `h1 = @person.decorate.full_name`. In a view where many values in a decorated instance need to be used, we can create a decorated instance of the record and reference that:

    - person_decorated = person.decorate

    div = person_decorated.full_name
    div = person_decorated.catch_phrase

The current issues with calling `.decorate` by default:

- There is a Model record which is referenced by assets using the word 'model', but this is Draper's interface for accessing the underlying object from a decorated record. This means accessing the Model association on an Item looks as such: `@item.model.model.name`, which is confusing and could easily lead to issues.

- Custom helpers would either need to check if the model passed to them were decorated, or be passed the underlying model from the view. This would require calling `.model` on every record passed to a helper, making refactoring difficult. It also adds confusion for any helpers which need to access the model field on an asset.

## Features for another time

- Depreciation
- EULA
- Images

## Ideas

- Add a preview icon to searchable dropdowns to either open the record in a new tab, or in a modal for a quick peek at the model data.
