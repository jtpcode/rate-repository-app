import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
import { Link, useNavigate } from "react-router-native";
import Constants from "expo-constants";
import { useQuery } from "@apollo/client";

import AppBarTab from "./AppBarTab";
import theme from "../theme";
import { GET_CURRENT_USER } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
  },
  itemTab: {
    padding: 12,
  },
  colorBackground: {
    backgroundColor: theme.colors.appBar,
  },
  scrollView: {
    flexGrow: 1,
  },
  text: {
    color: theme.colors.textSecondary,
  },
});

const AppBar = () => {
  const { data } = useQuery(GET_CURRENT_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/signin");
  };

  const isSignedIn = Boolean(data?.me);

  return (
    <View style={[styles.container, styles.colorBackground]}>
      <ScrollView
        horizontal
        contentContainerStyle={{ flexDirection: "row", alignItems: "center" }}
        style={styles.scrollView}
      >
        <Link to="/" underlayColor="transparent">
          <AppBarTab label="Repositories" style={styles.itemTab} />
        </Link>
        {isSignedIn ? (
          <>
            <Link to="/create-review" underlayColor="transparent">
              <AppBarTab label="Create a review" style={styles.itemTab} />
            </Link>
            <Pressable onPress={signOut}>
              <Text style={styles.text}>Sign out</Text>
            </Pressable>
          </>
        ) : (
          <Link to="/signin" underlayColor="transparent">
            <AppBarTab label="Sign In" style={styles.itemTab} />
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
