import gql from 'graphql-tag';

export const LOCATION_FRAGMENT = gql`
	fragment LocationParts on Location {
		id
		name
		parent {
			id
			name
		}
		company {
			id
			name
		}
	}
`;