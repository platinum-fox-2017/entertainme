import gql from "graphql-tag";

export const movieGQL = gql`
    {
        movie {
            title,
            poster_path
            tag
            status
            overview
        }
    }
`;