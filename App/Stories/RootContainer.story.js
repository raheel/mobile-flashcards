import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Provider from "./Provider";

import RootContainer from '../Containers/RootContainer'

storiesOf('Deck')
  .addDecorator(story => <Provider story={story()} ></Provider>)
  .add('Default', () => (
    <RootContainer/>
  ))
