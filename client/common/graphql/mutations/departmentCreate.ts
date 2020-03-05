import gql from 'graphql-tag';

const DEPARTMENT_CREATE_MUTATION = gql`
	mutation departmentCreate(
		$name: String!
	){
		departmentCreate(
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

export default DEPARTMENT_CREATE_MUTATION;