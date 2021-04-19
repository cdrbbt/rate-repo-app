import { gql } from '@apollo/client';

const BASE_REPO_INFO = gql`
  fragment BaseRepoInfo on Repository {
    ownerAvatarUrl,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    id
  }
`;

export const GET_REPOSITORIES = gql`
${BASE_REPO_INFO}
  query repositories{
  repositories{
    edges{
      node{
        ...BaseRepoInfo
      }
    }
  }
}
`;

export const GET_REPOSITORY = gql`
${BASE_REPO_INFO}
  query repository($id: ID!){
    repository(id: $id){
      ...BaseRepoInfo,
      url,
      reviews{
        edges{
          node{
            id
            text
            rating
            createdAt
            user{
              id
              username
            }
          }
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
