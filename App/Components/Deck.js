import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'

const Deck = ({title, numberOfCards, showBorder}) =>
      <View style={{justifyContent: 'center', alignItems: 'center', borderWidth: showBorder==true ? 1 : 0, height: 200}}>
        <Text style={{fontSize: 30, color: 'black'}}>{title}</Text>
        <Text style={{fontSize: 20, color: 'gray'}}>{numberOfCards} cards</Text>
      </View>;
    

export default Deck