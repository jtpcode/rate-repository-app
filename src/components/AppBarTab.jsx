import { View } from "react-native";
import Text from "./Text";

const AppBarTab = ({ label, style }) => (
  <View style={style}>
    <Text fontWeight="bold" fontSize="subheading" color="appBarTab">
      {label}
    </Text>
  </View>

  // "Pressable" doesn't seem to work with Link in AppBar.jsx
  // <Pressable style={style}>
  //   <Text fontWeight="bold" fontSize="subheading" color="appBarTab">
  //     {label}
  //   </Text>
  // </Pressable>
);

export default AppBarTab;
