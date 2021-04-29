import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/Feather';
import {Entypo} from 'react-native-vector-icons';
import {Header} from 'react-native/Libraries/NewAppScreen';
Icon.loadFont();
const IndexScreen = ({navigation}) => {
  const {state, deleteBlogPost} = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Show', {id: item.id});
              }}>
              <View style={style.row}>
                <Text style={style.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteBlogPost(item.id);
                  }}>
                  <Icon style={style.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Icon name="plus" style={style.icon} size={30} />
      </TouchableOpacity>
    ),
  };
};
const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    marginRight: 5,
  },
});

export default IndexScreen;
