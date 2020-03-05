import gql from 'graphql-tag';
import { LOCATION_FRAGMENT } from '../fragments';

const LOCATION_CREATE_MUTATION = gql`
	mutation locationCreate(
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

export default LOCATION_CREATE_MUTATION;