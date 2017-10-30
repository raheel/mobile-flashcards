import { StyleSheet, TouchableHighlight, Text } from "react-native";
import React from "react";

const Button = ({onPress, title, backgroundColor, borderColor, textColor}) =>
  <TouchableHighlight
    style={[styles.container, {backgroundColor: backgroundColor, borderColor: borderColor ? borderColor : backgroundColor}]}
    onPress={() => onPress()}
  >
    <Text style={[styles.title, {color: textColor}]}>{title}</Text>
  </TouchableHighlight>;

var styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: 250
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
          textAlign:'center',

  },

});

export default Button;
