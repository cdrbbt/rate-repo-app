import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query repositories{
  repositories{
    edges{
      node{
        ownerAvatarUrl,
        fullName,
        description,
        language,
        stargazersCount,
        forksCount,
        reviewCount,
        ratingAverage
      }
    }
  }
}
`;

export const CHECK_AUTHORIZATION = gql`
query authorizationCheck{
  authorizedUser{
    id
    username
  }
}
`;
