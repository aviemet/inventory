import gql from 'graphql-tag';

export const USER_COMPANY_FRAGMENT = gql`
	fragment UserCompanyParts on UserCompany {
		company{
			id
			name
		}
		role {
			id
			name
		}
	}
`;