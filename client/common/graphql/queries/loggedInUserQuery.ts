import gql from 'graphql-tag';
import { USER_AUTH_FRAGMENT } from '../fragments';

export default gql`
	query getLoggedInUser {
		loggedInUser {
			...UserAuthDetails
		}
	}
	${USER_AUTH_FRAGMENT}
`;