import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class EmployeeCreate extends Component {
  createEmployee =() =>{
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday'});
  }
  render() {
    console.log(this.props.employee);
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
          <CardSection style={{ flexDirection: 'row',}}>
            <Text style={styles.picker}>Shift</Text>
            <Picker
              style={{ flex:1}}
              selectedValue={ this.props.shift}
              onValueChange={value => this.props.employeeUpdate({ prop:'shift', value})}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </CardSection>
          <CardSection>
              <Button onPress={this.createEmployee}>
                  Create
              </Button>
          </CardSection>
      </Card>
    );
  }
}

const styles ={
  picker:{
    fontSize: 18,
    paddingLeft: 20,
  }
}

const mapStateToProps =(state) =>{
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
};

export default connect(mapStateToProps,{ 
  employeeUpdate, employeeCreate
 })(EmployeeCreate);
