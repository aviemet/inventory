import gql from 'graphql-tag';
import { USER_COMPANY_FRAGMENT } from '../fragments';

const COMPANY_CREATE_MUTATION = gql`
	mutation companyCreate(
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

export default COMPANY_CREATE_MUTATION;