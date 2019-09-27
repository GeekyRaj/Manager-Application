import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';
import _ from 'lodash';
var INITIAL_STATE = {
    raj:[],
    rishi:'pro' 
};

export default (state =INITIAL_STATE, action) =>{
    console.log("action.payloadadsdad",action.payload);
    const employees = _.map(action.payload, (val, uid) => {
        return { ...val, uid };
      });
    console.log("converted",employees);
    switch(action.type){
        case EMPLOYEES_FETCH_SUCCESS:
            return {raj: employees, rishi: "RISSHIRISIRSIHIS"};
        default:
            return state;
    }
}