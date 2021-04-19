import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { loading, data, refetch } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {id}
  });
  
  const repository = loading
  ? null
  : data.repository;

  return { repository , loading, refetch};
};

export default useRepository;