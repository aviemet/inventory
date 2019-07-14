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
			user {
				id
				email
				person {
					firstName
					lastName
				}
			}
			authToken
			refreshToken
		}
	}
`;