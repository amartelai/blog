import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id'),
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', {id: navigation.getParam('id')})
        }>
        <Icon name="edit" size={25} style={styles.icon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
});

export default ShowScreen;
