import gql from 'graphql-tag';

export default gql`
	query getDepartments {
		departments {
			id
			name
			company {
				id
				name
			}
		}
	}
`;