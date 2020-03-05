import gql from 'graphql-tag';
import { LOCATION_FRAGMENT } from '../fragments';

export default gql`
	query getLocations {
		locations {
			...LocationParts
		}
	}
	${LOCATION_FRAGMENT}
`;