import gql from 'graphql-tag';
import { USER_COMPANY_FRAGMENT } from '../fragments';

export default gql`
	mutation COMPANY_CREATE_MUTATION(
		$name: String!
	){
		companyCreate(
			name: $name
		){
			...UserCompanyParts
		}
	}
	${USER_COMPANY_FRAGMENT}
`;