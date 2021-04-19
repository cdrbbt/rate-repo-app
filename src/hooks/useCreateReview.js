import { useMutation } from '@apollo/client';
import { POST_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(POST_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const { data } =  await mutate({ variables: { review: { repositoryName, ownerName, rating: parseInt(rating), text }}});
    if (data) {
      console.log.data;   
    }
    return data;
  };

  return [createReview, result];
};

export default useCreateReview;