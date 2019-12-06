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
				department
				contact {
					id
					emails {
						id
						email
						notes
					}
					phones {
						id
						number
						extenstion
						notes
					}
					addresses {
						id
						address
						address2
						city
						state
						zip
						notes
					}
				}
			}
		}
	}
`;