import { ApolloClient, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";

const createApolloClient = () => {
  return new ApolloClient({
    // uri: "https://countries.trevorblades.com/",
    // uri: "https://a83cc44cf912.ngrok-free.app/graphql",
    uri: Constants.expoConfig.extra.apolloUri,
    // link: new HttpLink({ uri: "http://192.168.38.102:4000/graphql" }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
