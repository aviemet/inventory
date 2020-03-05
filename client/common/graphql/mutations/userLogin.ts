import gql from 'graphql-tag';
import { USER_AUTH_FRAGMENT } from '../fragments';

const USER_LOGIN_MUTATION = gql`
	mutation userLogin(
		$email: String!
		$password: String!
	){
		userLogin(
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

export default USER_LOGIN_MUTATION;