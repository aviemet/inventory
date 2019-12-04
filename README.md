# README

## Application Intention

Asset management for entire asset lifecycle. Track from purchase through active support to dperecation.

Assets: 
* Check in and out of active inventory
* Assign to person, department or location
* Indexed by serial number
* Searchable fields for all hardware info including IP and MAC address

Networks:
* Aggregates IP addresses of all assets
* Tracks structure of local network
* * Notes network infrastructure which defines the network
* Provides a table view of all assets categorized by network segment/address
* Network calculation tools

Consumables:
* Increment inventory with a purchase
* Logging of all incoming and outgoing usage

Purchases:
* Tracks source, purchase date, cost, category
* * Optional assignemtn to GL codes
* * Optional purchase request generation to be printed or emailed

Licenses:
* List of licenses by category
* Assignable to an asset
* * Decrementable in the case of bulk licensing

Accessories:
* Assignable to an asset, person or location
* Check in and out of active inventory

People:
* Person records can be pulled from LDAP/AD (not required)
* User accounts reference a person always

Vendors:
* For item purchasing, service providers and software
* Tracks company information
* * Account rep/main contact, support lines and other contact info
* Links to contracts

Contracts:
* Tracks contract terms
* * Start/end dates
* * Billing cycles and amounts

Companies:
* Top level records
* User permissions related to the company association
* Brandable (logo, theme)

Locations:
* Tree structure with Company as root

Departments:
* Flat structure under company
* References location (optional)

Help Desk:
* Email integration
* * Scans one email address, converts all incoming emails to tickets
* * Scan sent email, perhaps can include in ticket info
* * Respond to tickets in app, generates email
* * Filtering rules for what to ignore
* Associate tickets with any other record
* Bulk edit/update/close

Documentation:
* Wiki style living documentation
* * Links to any record
* * Revision history
* * WYSIWYG editor
* Permissions set at the department level, overridden at the individual level

Software Agents:
* Agent for Mac, Windows, Linux, iOS, Android
* Connects to server using API key
* Periodically reports asset data through GraphQL endpoints

### Reference

TSConfig Options:
https://www.typescriptlang.org/docs/handbook/compiler-options.html

React Native Elements UI Kit
https://react-native-training.github.io/react-native-elements/blog/2018/12/13/react-native-web.html

SQL Designer
https://app.sqldbm.com/PostgreSQL/Edit/p69051/#

Currently working from tutorials:

React Native Web:
https://www.youtube.com/watch?v=_CBYbEGvxYY&t=2925s

JWT Auth:
https://www.youtube.com/watch?v=RUZB8tpyDbQ&list=PLN3n1USn4xlkWolE06ELeTW9XqGJ7oiOn&index=2
https://www.pluralsight.com/guides/token-based-authentication-with-ruby-on-rails-5-api

Unique IDs within type:
https://www.youtube.com/watch?v=pYbrI2zYR6U&list=PLQQMnHgG1zgHIoFiMlzb-lDgMK0tg379L&index=3&t=0s
https://github.com/rmosolgo/graphql-ruby/blob/master/guides/relay/object_identification.md

Potentially usefull reads:

https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej

https://jwt.io/introduction/

### Books

Everyday Rails Testing with RSpec

Growing Rails Applications in Practice

## Site Components

React Native Elements
https://react-native-training.github.io/react-native-elements/docs/customization.html
https://react-native-training.github.io/react-native-elements/blog/2018/12/13/react-native-web.html

    "react": "^16.8.6",
    "react-art": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-native": "^0.60.3",
    "react-native-web": "^0.11.5"

## Notes

* Token salt for authentication is app_secret + user_secret
* Refresh token is salted with app_secret + user_secret + refresh_secret
* Can invalidate refresh token by changing refresh_secret on user record


## Structure

Front end served from client folder. Mono-repo for sharing code between platforms (react-native, electron, react-web).

Decouple platform code as much as possible, reuse platform independant components as much as possible. In other words, we're not quite at the point where using the same codebase for all platforms is possible. Makes more sense to build out the web application first, then reuse as much as possible when creating the native app. This will allow us to arrive at an MVP faster since we won't be running into the pitfalls of an experimental platform.

/client
    /web
    /native
    /common