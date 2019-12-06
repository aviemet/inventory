import gql from 'graphql-tag';

export default gql`
	mutation USER_LOGIN_MUTATION(
		$email: String!
		$password: String!
	){
		userLogin(
			authInput:{
				email: $email, 
				password: $password
			}
		){
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
			companies {
				company{
					id
					name
				}
				role {
					id
					name
				}
			}
		}
	}
`;