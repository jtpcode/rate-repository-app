import { GET_REPOSITORY } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useRepository = (id) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    console.error("Error fetching repository:", error);
  }

  return {
    repository: data?.repository,
    loading,
  };
};

export default useRepository;
