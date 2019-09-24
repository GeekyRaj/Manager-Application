import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {

onEmailChange(text){
    this.props.emailChanged(text);
}

onPasswordChange(text){
    this.props.passwordChanged(text);
}

onLoginPress(){
    const { email, password } = this.props;
    console.log(email+' '+password)

    this.props.loginUser({ email, password});
    alert('hello')
}

  render() {
    return (
        <View style={{paddingTop:180}}>
      <Card>
          <CardSection>
            <Input
                label="Email"
                placeholder="email@gmail.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
                secureTextEntry
                label="Password"
                placeholder="********"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
            />
          </CardSection>
          <CardSection>
              <Button onPress={this.onLoginPress.bind(this)}>
                  Login
              </Button>
          </CardSection>
      </Card>
      </View>
    );
  }
}

const mapStateToProps = state =>{
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

export default connect(mapStateToProps,
    { emailChanged, passwordChanged, loginUser }
    )(LoginForm);
