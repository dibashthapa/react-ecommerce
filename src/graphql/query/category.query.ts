import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    query {
        categories(type: "grocery") {
            id
            title
            slug
            icon
            children {
                id
                title
                slug
            }
        }
    }
`;
