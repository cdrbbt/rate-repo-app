import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
  mutation authorize($credentials: AuthorizeInput!){
    authorize(credentials: $credentials){
      accessToken
    }
  }
`;

export const POST_REVIEW = gql`
  mutation postReview($review: CreateReviewInput) {
    createReview(review: $review){
      id,
      user{
        id,
        username
      },
      repository{
        id,
      },
      userId,
      repositoryId
      rating,
      createdAt,
      text
    }
  }
`;