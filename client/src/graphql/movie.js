import gql from "graphql-tag";

export let movieGQL = gql`
    {
        movie {
            title
            poster_path
            tag
        }
    }

`
