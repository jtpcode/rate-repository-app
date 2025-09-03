import { View, StyleSheet, ScrollView, Pressable } from "react-native";
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
});

const AppBar = () => {
  const { data } = useQuery(GET_CURRENT_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate("/signin");
  };

  const isSignedIn = Boolean(data?.me);

  return (
    <View style={[styles.container, styles.colorBackground]}>
      <ScrollView
        horizontal
        contentContainerStyle={{ flexDirection: "row", alignItems: "center" }}
        style={{ flexGrow: 1 }}
      >
        <Link to="/" underlayColor="transparent">
          <AppBarTab label="Repositories" style={styles.itemTab} />
        </Link>
        {isSignedIn ? (
          <Pressable onPress={handleSignOut}>
            <AppBarTab label="Sign Out" style={styles.itemTab} />
          </Pressable>
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
