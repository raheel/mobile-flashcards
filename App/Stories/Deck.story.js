import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import Deck from '../Components/Deck'

storiesOf('Deck')
  .add('Default', () => (
    <Deck title='Title' numberOfCards='3'/>
  ))
