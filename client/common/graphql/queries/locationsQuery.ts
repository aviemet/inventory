import gql from 'graphql-tag';

export default gql`
	query getLocations {
		locations {
			id
			name
			company {
				id
				name
			}
		}
	}
`;