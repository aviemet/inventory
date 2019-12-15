import gql from 'graphql-tag';
import { USER_AUTH_FRAGMENT } from '../fragments';

const USER_CREATE_MUTATION = gql`
	mutation userCreate(
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

export default USER_CREATE_MUTATION;