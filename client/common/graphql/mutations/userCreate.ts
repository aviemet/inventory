import gql from 'graphql-tag';

export default gql`
	mutation USER_CREATE_MUTATION(
		$email: String!
		$password: String!
	){
		userCreate(
			authInput:{
				email: $email, 
				password: $password
			}
		){
			id
			email
		}
	}
`;