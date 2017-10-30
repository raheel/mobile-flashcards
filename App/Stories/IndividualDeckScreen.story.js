import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Provider from "./Provider";

import IndividualDeckScreen from "../Containers/IndividualDeckScreen";


const deck = {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
};

storiesOf("IndividualDeckScreen")
  .addDecorator(story => <Provider story={story()} ></Provider>)
  .add("Default", () =>
      <IndividualDeckScreen deck={deck} />
  );
