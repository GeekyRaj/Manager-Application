import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Card>
          <CardSection>
              <Input
                label="Name"
                placeholder="Jack"
                value={this.props.name}
                onChangeText={value => this.props.employeeUpdate({ prop: "name", value})}
              />
          </CardSection>
          <CardSection>
          <Input
                label="Phone No."
                placeholder="8956321456"
                value={this.props.phone}
                onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value})}
            />
          </CardSection>
          <CardSection></CardSection>
          <CardSection>
              <Button>
                  Create
              </Button>
          </CardSection>
      </Card>
    );
  }
}

const mapStateToProps =(state) =>{
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
};

export default connect(mapStateToProps,{ employeeUpdate })(EmployeeCreate);
