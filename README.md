# README

## Installation

Postgres and Redis must be installed prior to running

## Application Intention

Asset management for entire asset lifecycle. Track from purchase through active support to deprecation.

Items:

- [x] Check in and out of active inventory
- [x] Assign to person, department or location
- [ ] Searchable fields for all hardware info including IP and MAC address

Accessories:

- [ ] Trackable quantity
- [x] Assignable to an asset, person or location
- [x] Check in and out of active inventory

Consumables:

- [ ] "Using" a consumable permanently removes it from inventory
- [ ] Logging of all incoming and outgoing usage

Networks:

- [ ] Aggregates IP addresses of all assets
- [x] Tracks structure of local network
  - [x] Notes network infrastructure which defines the network
- [ ] Provides a table view of all assets categorized by network segment/address
- [ ] Network calculation tools

Purchases:

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

### Database Notes

The main difference between an Item and an Accessory or Consumable is that an Item does not have a quantity field. Accessories and Consumables describes items whith an inventory level which can be increased through purchase or manual adjustment. Accessories represent items which generally accompany an asset such as mice (mouses?) and keyboards and can be returned after use. Consumables represent items which disappear after use such as paper or toner.

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

### Companies

Companies are essentially top level organizational units. All other objects can be considered to belong to a company with an "Ownership" relationship. Company association is polymorphic, so any forms must use the `form_for` method and handle the assignment in the controller. This could possibly be a method to include in a concern.

### Ownerships

Ownership model also contains a field for Department, allowing an "ownable" to be associated with a department as well. This association is how a person is associated with a department, but also allows records such as items to be associated with a second level of ownership. This way, when an item is checked in it still retains an association with the department for which it was purchased.

### View Components

View Components should all be namespaced to a folder for each component. This adds verbosity, which is addressed by the view_component_helper. For instance, to create a "share" button, you would use the generator:

`rails g component Buttons::Share::Share`

This creates the file structure:

    | components
    |\ buttons
    ||\ share
    |||\ share_component.rb
    |||| share_component.html.slim

This would then be used in a view as such:

`= view 'buttons/share`

This syntax is preferable to:

`= render Buttons::Share::ShareCompnent.new`

### Decorators

Draper is installed and a decorator object exists for each class, however we don't call `.decorate` on each query passed from the controller. There are things happening at the view layer which become compromised by this extra layer. When the methods in a decorator are needed, you can call `.decorate` on the record in the view template to gain access to its methods. For instance: `h1 = @person.decorate.full_name`.

The current issues with calling `.decorate` by default:

- The Item record has a field called 'model', which is also the interface for accessing the underlying object from a decorated record. This means accessing the Model association on an Item looks as such: `@item.model.model.name`, which is confusing at best and could easily lead to issues.

- Custom helpers would either need to check if the model passed to them were decorated, or be passed the underlying model from the view. This would require calling `.model` on every record passed to a helper, making refactoring difficult. It also adds confusion for any records with a 'model' field.

## Features for another time

- Depreciation
- EULA
- Images

## Ideas

- Add a preview icon to searchable dropdowns to either open the record in a new tab, or in a modal for a quick peek at the model data.
