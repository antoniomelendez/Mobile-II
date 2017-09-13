import React from "react";
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage, FlatList } from "react-native";
import axios from 'axios';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('token').then((token) => { // retrieve the token from "localStorage"
    axios.get('https://mobile-server-ii.herokuapp.com/users', {
      headers: {
        authorization: token, // attach the token as a header
      }
    }).then((response) => {
      this.setState({ content: response.data });
    });
  })
 }
 render() {
  return (
    <View>
      <FlatList
        data={
          this.state.content
        }
        renderItem={({item}) => <Text>{ item.email }</Text>}
        keyExtractor= { item => item._id }
      />
    </View>
  );
 }
}