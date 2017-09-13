import React from "react";
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage } from "react-native";
import axios from 'axios';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.login = this.login.bind(this);
  }
  login() {
    const { email, password } = this.state;
   axios.post('https://mobile-server-ii.herokuapp.com/signin', { email, password })
     .then((data) => {
       const token = data.data.token;
       AsyncStorage.setItem('token', token);
       this.props.navigation.navigate('Content');
     })
     .catch((err) => {
       console.log(err);
     })
  }
  static navigationOptions = {
    title: "Sign In Page"
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          placeholder="password"
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title={'Sign In'}
        onPress={() => {
          this.login();
        }}
        />
      </View>
    );
  }
}
