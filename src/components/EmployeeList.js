import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, FlatList,TouchableWithoutFeedback,View } from 'react-native';
import { employeeFetch } from '../actions';
import { Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import ListItem from './ListItem';

class EmployeeList extends Component {

  componentDidMount() {
    this.props.employeeFetch();
  }

  onRowPress= ()=>{
    Actions.employeeCreate({ employee: this.props.employee});
  }

  render() {
    console.log('Employeeeeeee  ' + this.props.employees);
    return (
      <Card>
        <TouchableWithoutFeedback onPress={()=> Actions.employeeCreate({ employee: this.props.employee})}>
          <View>
            <FlatList
              data={this.props.employees}
              renderItem={({ item }) => 
              <View>
                <ListItem employee={item}/>
              </View>
              }
              keyExtractor={item => item.name}
              />
          </View>
        </TouchableWithoutFeedback>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.employees.rishi)
  console.log("RSAJ", state.employees.raj)
  const employees = state.employees.raj
  return { employees };
}

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
