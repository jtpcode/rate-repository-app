import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";
import theme from "../theme";

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
        <Link to="/signin" underlayColor="transparent">
          <AppBarTab label="Sign In" style={styles.itemTab} />
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
