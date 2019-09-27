import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  createEmployee =() =>{
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday'});
  }
  render() {
    console.log(this.props.employee);
    return (
      <Card>
          <EmployeeForm { ...this.props }/>
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
