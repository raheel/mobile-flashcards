import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Provider from "./Provider";

import QuizScreen from "../Containers/QuizScreen";


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

storiesOf("Quiz")
  .addDecorator(story => <Provider story={story()} ></Provider>)
  .add("Default", () =>
      <QuizScreen deck={deck} questionNumber={1}/>
  );
