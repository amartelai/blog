import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.header}> Enter Title: </Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.size}
      />
      <Text style={styles.header}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.size}
      />
      <Button title="Save BlogPost" onPress={() => onSubmit(title, content)} />
    </View>
  );
};
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};
const styles = StyleSheet.create({
  size: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  header: {
    fontSize: 24,
    marginBottom: 5,
  },
});

export default BlogPostForm;
