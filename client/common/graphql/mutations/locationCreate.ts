import gql from 'graphql-tag';

export default gql`
	mutation LOCATION_CREATE_MUTATION(
		$name: String!
	){
		locationCreate(
			name: $name
		){
			id
			name
			company {
				id
				name
			}
		}
	}
`;