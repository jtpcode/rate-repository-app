import { useMutation, useApolloClient } from "@apollo/client";

import useAuthStorage from "../hooks/useAuthStorage";
import { SIGN_IN } from "../graphql/queries";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    const accessToken = data?.authenticate?.accessToken;
    if (accessToken) {
      await authStorage.setAccessToken(accessToken);
      await apolloClient.resetStore();
    }
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
