import gql from 'graphql-tag';

export default gql`
	mutation DEPARTMENT_CREATE_MUTATION(
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