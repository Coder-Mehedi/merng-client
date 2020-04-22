import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
	query {
		getPosts {
			id
			body
			username
			createdAt
			likes {
				username
			}
			comments {
				body
				id
				username
			}
			likeCount
			commentCount
		}
	}
`;
