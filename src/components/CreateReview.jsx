import { View, StyleSheet, TextInput, Pressable } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import { CREATE_REVIEW } from "../graphql/queries";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  reviewTextArea: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
    minHeight: 80,
    textAlignVertical: "top",
    backgroundColor: "white",
  },
});

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(0, "Rating must be between 0 and 100")
    .max(100, "Rating must be between 0 and 100"),
  text: yup.string(),
});

const CreateReview = () => {
  const [createReview] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const { data } = await createReview({
        variables: {
          review: {
            ownerName,
            repositoryName,
            rating: Number(rating),
            text,
          },
        },
      });

      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Repository owner name"
        value={formik.values.ownerName}
        onChangeText={formik.handleChange("ownerName")}
        style={[
          styles.input,
          formik.touched.ownerName &&
            formik.errors.ownerName && { borderColor: "red" },
        ]}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text color="error">{formik.errors.ownerName}</Text>
      )}

      <TextInput
        placeholder="Repository name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
        style={[
          styles.input,
          formik.touched.repositoryName &&
            formik.errors.repositoryName && { borderColor: "red" },
        ]}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text color="error">{formik.errors.repositoryName}</Text>
      )}

      <TextInput
        placeholder="Rating between 0 and 100"
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
        keyboardType="numeric"
        style={[
          styles.input,
          formik.touched.rating &&
            formik.errors.rating && { borderColor: "red" },
        ]}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text color="error">{formik.errors.rating}</Text>
      )}

      <TextInput
        placeholder="Review"
        value={formik.values.text}
        onChangeText={formik.handleChange("text")}
        multiline
        style={[
          styles.reviewTextArea,
          formik.touched.text && formik.errors.text && { borderColor: "red" },
        ]}
      />
      {formik.touched.text && formik.errors.text && (
        <Text color="error">{formik.errors.text}</Text>
      )}

      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default CreateReview;
