import gql from 'graphql-tag';

export default gql`
	mutation COMPANY_CREATE_MUTATION(
		$name: String!
		$userId: String!
	){
		companyCreate(
			name: $name
			userId: $userId
		){
			id
			name
		}
	}
`;