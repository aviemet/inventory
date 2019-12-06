import gql from 'graphql-tag';

export default gql`
	query getCompanies {
		companies {
			id
			name
		}
	}
`;