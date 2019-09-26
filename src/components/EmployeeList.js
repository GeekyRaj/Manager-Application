import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, FlatList } from 'react-native';
import { employeeFetch } from '../actions';
import { Card, CardSection } from './common';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


class EmployeeList extends Component {

  componentDidMount() {
    this.props.employeeFetch();
    //this.createDataSource(this.props);
  }

  componenetWillReceiveProps(nextProps) {
    //this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    console.log('Employeeeeeee  ' + this.props);
    return (
      <Card>
        <CardSection>
          <Text>James</Text>
        </CardSection>
        <CardSection>
          <Text>Kevin</Text>
        </CardSection>

        <FlatList
          data={DATA}
          renderItem={({ item }) => <CardSection>
            <Text>{item.title}</Text>
          </CardSection>}
          keyExtractor={item => item.id}
        />

      </Card>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employee, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
}

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
