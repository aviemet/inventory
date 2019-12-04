import gql from 'graphql-tag';

export default gql`
	query getLoggedInUser {
		loggedInUser {
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