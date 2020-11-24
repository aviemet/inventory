# README

## Application Intention

Asset management for entire asset lifecycle. Track from purchase through active support to deprecation.

Assets:

- Check in and out of active inventory
- Assign to person, department or location
- Indexed by serial number
- Searchable fields for all hardware info including IP and MAC address

Networks:

- Aggregates IP addresses of all assets
- Tracks structure of local network
  - Notes network infrastructure which defines the network
- Provides a table view of all assets categorized by network segment/address
- Network calculation tools

Consumables:

- Increment inventory with a purchase
- Logging of all incoming and outgoing usage

Purchases:

- Tracks source, purchase date, cost, category
  - Optional assignment to GL codes
  - Optional purchase request generation to be printed or emailed

Licenses:

- List of licenses by category
- Assignable to an asset
  - Decrementable in the case of bulk licensing

Accessories:

- Assignable to an asset, person or location
- Check in and out of active inventory

People:

- Person records can be pulled from LDAP/AD (not required)
- User accounts reference a person always

Vendors:

- For item purchasing, service providers and software
- Tracks company information
  - Account rep/main contact, support lines and other contact info
- Links to contracts

Contracts:

- Tracks contract terms
  - Start/end dates
  - Billing cycles and amounts

Companies:

- Top level records
- User permissions related to the company association
- Brandable (logo, theme)

Locations:

- Tree structure with Company as root

Departments:

- Flat structure under company
- References location (optional)

Help Desk:

- Email integration
  - Scans one email address, converts all incoming emails to tickets
  - Scans sent mail to build full conversation in app
  - Respond to tickets in app, generates email
  - Filtering rules for what to ignore
- Associate tickets with other records
- Bulk edit/update/close

Documentation:

- Wiki style living documentation
  - Links to other records
  - Revision history
  - WYSIWYG editor
- Permissions set at the department level, overridden at the individual level

Software Agents:

- Agent for Mac, Windows, Linux, iOS, Android
- Connects to server using API key
- Periodically reports asset data through REST API endpoints

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

Companies are essentially top level organizational units. All other objects can be considered to belong to a company with an "Ownership" relationship. Company association is polymorphic, so any forms must use the `form_for` method and handle the assignment in the controller. This could possibly be a method to include in a concern.

Ownership model also contains a field for Department, allowing an "ownable" to be associated with a department as well. This association is how a record is assigned to a department, but also allows records such as items to be associated with a second level of ownership. This way, if an item is checked in it still retains an association with the department for which it was purchased.

## Features for another time

- Depreciation
