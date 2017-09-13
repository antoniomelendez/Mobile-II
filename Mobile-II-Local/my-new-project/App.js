import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Content from './Content';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title = {'Sign In'} 
        onPress={() => {
            this.props.navigation.navigate('SignIn');
          }}
        />
        <Button title = {'Sign Up'} 
        onPress={() => {
            this.props.navigation.navigate('SignUp');
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Routes = StackNavigator({
  Home: { screen: Home },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  Content: { screen: Content },
});

export default Routes;
