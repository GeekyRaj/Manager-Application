import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

onEmailChange=(text)=>{
    this.props.emailChanged(text);
}

onPasswordChange=(text)=>{
    this.props.passwordChanged(text);
}

onLoginPress=()=>{
    const { email, password } = this.props;
    console.log(email+' '+password)

    this.props.loginUser({ email, password});
}

renderButton = () =>{
    if(this.props.loading)
    {
        return <Spinner size="large"/>
    }
    return(
        <Button onPress={this.onLoginPress}>
                  Login
        </Button>
    )
}

renderError=()=> {
    if(this.props.error){
        return(
            <View style={{ backgroundColor:'white'}}>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
            </View>
        )
    }
}

  render() {
    return (
        <View style={{paddingTop:180}}>
      <Card>
          <CardSection>
            <Input
                label="Email"
                placeholder="email@gmail.com"
                onChangeText={this.onEmailChange}
                value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
                secureTextEntry
                label="Password"
                placeholder="********"
                onChangeText={this.onPasswordChange}
                value={this.props.password}
            />
          </CardSection>
          {this.renderError()}
          <CardSection>
              {this.renderButton()}
          </CardSection>
      </Card>
      </View>
    );
  }
}

const styles = {
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) =>{
    const { email, password, error, loading} = auth
    return { email, password, error, loading };
}

export default connect(mapStateToProps,
    { emailChanged, passwordChanged, loginUser }
    )(LoginForm);
