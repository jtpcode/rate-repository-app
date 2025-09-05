import { useParams } from "react-router-native";

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const RepositoryItemView = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading) return <Text>Loading...</Text>;

  if (!repository) return <Text>Repository not found</Text>;

  return <RepositoryItem repository={repository} showGithubButton={true} />;
};

export default RepositoryItemView;
