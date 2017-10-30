import React from 'react'
import { View, Alert } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import Button from '../Components/Button'

storiesOf('Button')
  .add('Add Card', () => (
    <Button title="Add Card" onPress={onPress} backgroundColor="black" textColor="white"/>
  ))
  .add('Start Quiz', () => (
    <Button title="Start Quiz" backgroundColor="white" borderColor="black" textColor="black"/>
  ))  
  .add('Correct', () => (
    <Button title="Correct" backgroundColor="green" textColor="white"/>
  ))
  .add('Incorrect', () => (
    <Button title="Incorrect" backgroundColor="red" textColor="white"/>
  ))  
  .add('Submit', () => (
    <Button title="Submit" backgroundColor="black" textColor="white"/>
  )) 

const onPress = ()=> {
Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)

}