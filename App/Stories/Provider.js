
import React from 'react';
import View from 'react-native'
import { Provider as ReduxProvider } from 'react-redux';
import createStore from '../Redux'

// create our store
const store = createStore()


const Provider = ({story}) => (
 <ReduxProvider store={store}>
     {story} 
    </ReduxProvider>
 )
 
export default Provider