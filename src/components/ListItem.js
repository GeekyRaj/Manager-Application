import React, { Component } from 'react';
import { CardSection } from './common';
import { Text,TouchableWithoutFeedback,View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

    render() {
        console.log(this.props.employee);
        const { name } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={()=> Actions.employeeEdit({ employee: this.props.employee})}>
                <View>
                    <CardSection>
                        <Text style={{ fontSize: 20, paddingLeft: 20, }}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default ListItem;
