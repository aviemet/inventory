import gql from 'graphql-tag';

const COMPANY_DELETE_MUTATION = gql`
	mutation companyDelete(
		$id: String!
	){
		companyDelete(
			id: $id
		){
			id
			name
		}
	}
`;

export default COMPANY_DELETE_MUTATION;