import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Provider from "./Provider";

import NewDeckScreen from '../Containers/NewDeckScreen'

storiesOf('NewDeckScreen')
  .addDecorator(story => <Provider story={story()} ></Provider>)
  .add('Default', () => (
    <NewDeckScreen/>
  ))
