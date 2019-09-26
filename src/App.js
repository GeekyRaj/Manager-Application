import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Route from './Route';
class App extends Component {

componentDidMount(){
    const firebaseConfig = {
        apiKey: 'AIzaSyBbmpQCMTq3afBjcK4J7rjMBySA4Dea27I',
        authDomain: 'manager-3a438.firebaseapp.com',
        databaseURL: 'https://manager-3a438.firebaseio.com',
        projectId: 'manager-3a438',
        storageBucket: '',
        messagingSenderId: '81595983593',
        appId: '1:81595983593:web:123bc01f30c2acd07eb278'
      };
      firebase.initializeApp(firebaseConfig);
}
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Route/>
      </Provider>
    );
  }
}

export default App;
