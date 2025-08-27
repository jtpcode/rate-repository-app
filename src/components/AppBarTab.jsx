import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ label, onPress, style }) => (
  <Pressable onPress={onPress} style={style}>
    <Text fontWeight="bold" fontSize="subheading" color="appBarTab">
      {label}
    </Text>
  </Pressable>
);

export default AppBarTab;
