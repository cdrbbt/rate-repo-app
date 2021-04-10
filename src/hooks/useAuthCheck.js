import { useQuery } from '@apollo/client';
import { CHECK_AUTHORIZATION } from '../graphql/queries'

const useAuthCheck = () => {
  const { loading, data } = useQuery(CHECK_AUTHORIZATION, {
    fetchPolicy: 'cache-and-network'
  });
  
  const auth = loading
  ? null
  : data.authorizedUser;

  return [ auth , loading ];
};

export default useAuthCheck;