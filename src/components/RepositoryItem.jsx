import { View, Image, StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.repositoryItemBackground,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  infoBox: {
    flex: 1,
    marginLeft: 12,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.repositoryItemLanguageTag,
    color: "#ffffff",
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 6,
    overflow: "hidden",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
});

const RepositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <View style={styles.topRow}>
      <Image
        source={{ uri: repository.ownerAvatarUrl }}
        style={styles.avatar}
      />
      <View style={styles.infoBox}>
        <Text fontWeight="bold">{repository.fullName}</Text>
        <Text>{repository.description}</Text>
        <Text style={styles.badge}>{repository.language}</Text>
      </View>
    </View>
    <View style={styles.statsRow}>
      <View style={styles.statItem}>
        <Text fontWeight="bold">
          {Number(repository.stargazersCount) >= 1000
            ? `${(Number(repository.stargazersCount) / 1000).toFixed(1)}k`
            : Number(repository.stargazersCount)}
        </Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.statItem}>
        <Text fontWeight="bold">
          {Number(repository.forksCount) >= 1000
            ? `${(Number(repository.forksCount) / 1000).toFixed(1)}k`
            : Number(repository.forksCount)}
        </Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.statItem}>
        <Text fontWeight="bold">
          {Number(repository.reviewCount) >= 1000
            ? `${(Number(repository.reviewCount) / 1000).toFixed(1)}k`
            : Number(repository.reviewCount)}
        </Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.statItem}>
        <Text fontWeight="bold">
          {Number(repository.ratingAverage) >= 1000
            ? `${(Number(repository.ratingAverage) / 1000).toFixed(1)}k`
            : Number(repository.ratingAverage)}
        </Text>
        <Text>Rating</Text>
      </View>
    </View>
  </View>
);

export default RepositoryItem;
