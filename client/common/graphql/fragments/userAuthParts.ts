import gql from 'graphql-tag';
import { USER_COMPANY_FRAGMENT } from './userCompanyParts';

export const USER_AUTH_FRAGMENT = gql`
	fragment UserAuthDetails on User {
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
			...UserCompanyParts
		}
	}
	${USER_COMPANY_FRAGMENT}
`;