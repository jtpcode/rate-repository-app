import { useParams } from "react-router-native";
import { FlatList, View, StyleSheet } from "react-native";

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
        backgroundColor: theme.colors.repositoryItemBackground,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#0366d6",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 12,
        }}
      >
        <Text fontWeight="bold" color="primary">
          {review.rating}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text color="textSecondary">
          {new Date(review.createdAt).toLocaleDateString()}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

const RepositoryItemView = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading) return <Text>Loading...</Text>;

  if (!repository) return <Text>Repository not found</Text>;

  const reviews = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <RepositoryItem repository={repository} showGithubButton={true} />
          <ItemSeparator />
        </>
      )}
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default RepositoryItemView;
