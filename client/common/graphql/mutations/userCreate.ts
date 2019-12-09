import gql from 'graphql-tag';
import { USER_AUTH_FRAGMENT } from '../fragments';

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
			...UserAuthDetails
		}
	}
	${USER_AUTH_FRAGMENT}
`;