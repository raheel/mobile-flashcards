import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Provider from "./Provider";

import NewQuestionScreen from '../Containers/NewQuestionScreen'

storiesOf('NewQuestionScreen')
  .addDecorator(story => <Provider story={story()} ></Provider>)
  .add('Default', () => (
    <NewQuestionScreen/>
  ))
