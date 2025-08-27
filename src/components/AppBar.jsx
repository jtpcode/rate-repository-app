import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
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
      <AppBarTab
        label="Repositories"
        onPress={() => {}}
        style={styles.itemTab}
      />
    </View>
  );
};

export default AppBar;
