import gql from 'graphql-tag';
import { LOCATION_FRAGMENT } from '../fragments';

export default gql`
	mutation LOCATION_CREATE_MUTATION(
		$name: String!
		$parent: String
	){
		locationCreate(
			name: $name
			parent: $parent
		){
			...LocationParts
		}
	}
	${LOCATION_FRAGMENT}
`;