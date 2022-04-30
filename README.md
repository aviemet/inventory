# README

## Installation

After cloning, install dependencies:

```bash
  yarn install
  bundle install
```

Then initialize the database:

```bash
  rails db:create && rails db:migrate && rails db:seed
```

Use the npm script to run the developement server processes through Foreman:

```bash
  yarn start
```

## Application Intention

Asset management for entire asset lifecycle. Track from purchase through active support to deprecation.

All hardware asset types:

- [x] Check in and out of active inventory
- [x] Assign to person, department or location
- [x] Logging of all incoming and outgoing usage

Items:

- [ ] Designate IP address info

Accessories:

- [ ] Trackable quantity

Consumables:

- [ ] "Using" a consumable permanently removes it from inventory
- [ ] Can replenish quantity using a purchase order (in very few steps)

Components:

- [ ] Trackable quantity
- [ ] Can only be assigned to an item

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

## Dev Notes

The main difference between an Item and an Accessory or Consumable is that an Item does not have a quantity field. Accessories and Consumables describe items with an inventory level which can be increased through a purchase or manual adjustment. Accessories represent items which generally accompany an asset such as mice (mouses?) and keyboards and can be returned after use. Consumables represent items which disappear after use such as paper or toner.

These differences are represented by three subclasses of the polymorphic Assignable class:

- `Assignable::Single`: Items, no count, can be reassigned.
- `Assignable::Quantity`: Accessories, tracks quantity, can be reassigned.
- `Assignable::Consume`: Consumables, tracks quantity, can not be reassigned.

### Searchable/Sortable and Table Components

This needs to be fully documented, too much going on in the background

### Companies

Companies are essentially top level organizational units. All other objects can be considered to belong to a company with an "Ownership" relationship.

### Ownerships

Given that an asset shouldn't belong to more than one company, a Company record is used to scope all items. Everything under the scope of a compnay is considered to be "owned" by that company (yes, even people), defined by a polymorphic Ownership record. An Ownership also contains an optional Department reference so that departmental ownership can live as a top level definition. This way an asset can be assigned outside of its department, but still maintain the relationship of its original owner.

### Blueprinter

The Blueprinter gem is used to shape data passed to Inertia components. Avoid passing raw data as props, and instead prefer using a Blueprint to standardize the shape of data being passed to the client. Use `render_as_json` in the render method to parse the data properly.

## Features for another time

- Depreciation
- EULA
- Images

## Ideas

- Add a preview icon to searchable dropdowns to either open the record in a new tab, or in a modal for a quick peek at the model data.

## Libraries

React Icons:
https://react-icons.github.io/react-icons