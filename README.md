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
  yarn dev
```

## Application Intention

Asset management for entire asset lifecycle. Track from purchase through active support to deprecation.

All hardware asset types:

- [x] Check in and out of active inventory
- [x] Assign to person, department or location
- [x] Logging of all incoming and outgoing usage

Items:

- [x] Designate IP address info

Accessories:

- [x] Trackable quantity

Consumables:

- [x] "Using" a consumable permanently removes it from inventory
- [x] Can replenish quantity
  - [ ] Optionally create a purchase order

Components:

- [x] Trackable quantity
- [x] Can only be assigned to an item

Networks:

- [x] Lists IP addresses of assets
- [x] Tracks structure of local network
  - [x] Notes network infrastructure which defines the network
- [x] Provides a table view of all assets categorized by network segment/address
  - [x] Paginates large subnets
- [ ] Network calculation tools

Purchases:

- [ ] Purchase order creates an item/consumeable/accessory/component record
  - [ ] Purchase orders for existing consumeables increases inventory count
- [ ] Tracks source, purchase date, cost, category
  - [ ] Optional assignment to GL codes
  - [ ] Optional purchase request generation to be printed or emailed

Licenses:

- [x] Assignable to an asset
  - [x] Decrementable in the case of bulk licensing

People:

- [x] Person records can be pulled from LDAP/AD (not required)
  - [ ] Merges existing similar records (Person with no guid and same name can be merged)

Vendors:

- [x] Referenced and sortable by all assets
- [ ] Stores useful details about the vendor
- [x] Links to contracts

Contracts:

- [x] Stores contract terms
  - [x] Start/end dates
  - [ ] Billing cycles and amounts
- [ ] File uploads for signed contracts storage

Companies:

- [x] Top level records
- [x] User permissions related to the company association
- [ ] Brandable (logo, theme)

Locations:

- [x] Tree structure under company

Departments:

- [x] Flat structure under company

Help Desk:

- [ ] Email integration
  - [ ] Scans one email address, converts all incoming emails to tickets
  - [ ] Scans sent mail to build full conversation in app
  - [ ] Respond to tickets in app, generates email
  - [ ] Filtering rules for what to ignore
- [x] Associate tickets with other records
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
  - [x] persistent per table per user
- [x] Sortable column headings & Pagination
- [ ] Custom fieldsets
- [x] Search bar filters by all fields, including custom fields
- [ ] Advanced search options

Form view for all models:

- [x] Associated record dropdowns are lazy loaded
- [x] Associated records have a "New" button next to them

---

## Dev Notes

### Assets

All assignable asset types inherit from a base Asset class. This allows for easy searching across the entire inventory of assets. The base Asset class is not assignable, only children with Assignable concerns.

### Assignments

There are three subclasses of the polymorphic Assignable class:

- `Assignable::Single`: Items, no count, can be reassigned.
- `Assignable::Quantity`: Accessories and Components, tracks quantity, can be reassigned.
- `Assignable::Consume`: Consumables, tracks quantity, cannot be reassigned.

Assignments have a `location` which should be derived from the Person, Item or Location of the AssignToable model, but can be overridden during assignment.

### Searchable/Sortable and Table Components

This needs to be fully documented, too much going on in the background

### Companies

Companies are top level organizational units. All other objects can be considered to belong to a company via an "Ownership" relationship.

### Ownerships

Given that an asset shouldn't belong to more than one company, a Company record is used to scope all items. Everything under the scope of a company is considered to be "owned" by that company, defined by a polymorphic Ownership record. An Ownership also contains an optional Department reference so that departmental ownership can live as a top level definition. This way an asset can be assigned outside of its department, but still maintain the relationship of its original owner.

### Blueprinter

The Blueprinter gem is used to shape data passed to Inertia components. Use `render_as_json` in the render method to parse the data properly. On any ActiveRecord model or relation you can call `.blueprint` for that model's Blueprinter object, and `.render` to call `render_as_json` on that model's or collection's blueprint. These have been defined in `app/models/application_record.rb` for the model, and `config/initializers/activerecord_extensions.rb` for collections.

These are functionally the same:

```ruby
ItemBlueprint.render_as_json(Item.first, view: :as_options)
Item.first.render(view: :as_options)
```

As are these:

```ruby
ItemBlueprint
Item.blueprint
```

### Roles

User record can have one role, `:super_admin`.

Person record can have `:admin` role set for specific Companies.

PersonGroup record is where all other roles will be applied.

### UID

Blueprinter base class provides a uid value derived from the id and model name of the record. This allows polymorphic records such as assignable and assign_toable to pass a single variable containing the values necessary to fetch a record. It also prevents naive sequential id attacks (since it's just a base64 encoding of the values, a program could still brute force it, but a human entering values into a url will be thwarted).

## Features for another time

- Depreciation
- EULA
- Images
- File uploads

## Ideas

- Add a preview icon to searchable dropdowns to either open the record in a new tab, or in a modal for a quick peek at the model data.

### Reference

#### Books

Everyday Rails Testing with RSpec

Growing Rails Applications in Practice

#### Sites

[Better Spec](https://www.betterspecs.org/)

#### Maybe Useful

[GTIN library for identifying code types](https://github.com/officeluv/gtin_extras)
