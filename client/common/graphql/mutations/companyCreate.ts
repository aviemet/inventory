import gql from 'graphql-tag';

export default gql`
	mutation COMPANY_CREATE_MUTATION(
		$name: String!
	){
		companyCreate(
			name: $name
		){
			id
			name
		}
	}
`;