import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Provider from "./Provider";

import DeckListScreen from "../Containers/DeckListScreen";



const data = {
  React: {
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
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

storiesOf("DeckListScreen")
  .addDecorator(story => <Provider story={story()}></Provider>)
  .add("Default", () =>
      <DeckListScreen data={data} />
  );
