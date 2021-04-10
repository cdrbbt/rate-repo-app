import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } =  await mutate({ variables: { credentials: {username, password}}});
    if (data) {
      await authStorage.setAcessToken(data.authorize.accessToken);
      console.log('set token');
      await apolloClient.resetStore();      
    }

    return data;
  };

  return [signIn, result];
};

export default useSignIn;