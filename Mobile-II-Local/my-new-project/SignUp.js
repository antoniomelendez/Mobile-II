import React from "react";
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage } from "react-native";
import axios from 'axios';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.register = this.register.bind(this);
 }

 register() {
   const { email, password } = this.state;
  axios.post('https://mobile-server-ii.herokuapp.com/users', { email, password })
    .then((data) => {
      const token = data.data.token;
      AsyncStorage.setItem('token', token);
      this.props.navigation.navigate('SignIn');
    })
    .catch((err) => {
      console.log(err);
    })
 }

  static navigationOptions = {
    title: "Sign Up Page"
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
        <Button title={'Sign Up'}
        onPress={() => {
          this.register();
        }}
        />
      </View>
    );
  }
}
