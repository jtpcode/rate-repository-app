import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
  },
});

const RepositoryItem = ({ repository }) => (
  <View style={styles.item}>
    <Text style={styles.title}>Full name: {repository.fullName}</Text>
    <Text>Description: {repository.description}</Text>
    <Text>Language: {repository.language}</Text>
    <Text>Stars: {repository.stargazersCount}</Text>
    <Text>Forks: {repository.forksCount}</Text>
    <Text>Reviews: {repository.reviewCount}</Text>
    <Text>Rating: {repository.ratingAverage}</Text>
  </View>
);

export default RepositoryItem;
