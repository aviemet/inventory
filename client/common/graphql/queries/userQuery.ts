import gql from 'graphql-tag';

export default gql`
	query getUser($id: ID) {
		user(userQueryInput: {id: $id}) {
			id
			email
			person {
				id
				firstName
				lastName
			}
		}
	}
`;