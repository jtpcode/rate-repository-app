import Text from "./Text";

const Subheading = ({ children, style, ...props }) => (
  <Text fontSize="subheading" fontWeight="bold" style={style} {...props}>
    {children}
  </Text>
);

export default Subheading;
