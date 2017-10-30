import React, { Component } from "react";
import {
  Alert,
  ScrollView,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import Deck from "../Components/Deck";
import Button from "../Components/Button";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

class QuizScreen extends Component {
  state = {};

  constructor(props) {
    super(props);
    const title = this.props.navigation.state.params.title;
    const questionNumber = this.props.navigation.state.params.questionNumber;

    console.log("quiz screen props---", title, questionNumber);
    const deck = this.props.decks.filter(deck => deck.title === title)[0];
    this.state = {
      deck: deck,
      questionNumber: questionNumber,
      numberCorrect: 0,
      numberIncorrect: 0,
      questionMode: true
    };
  }

  render() {
    console.log("quiz screen state---", this.state);

    const questionNumber = this.state.questionNumber;
    const deck = this.state.deck;

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingTop: 10,
            paddingLeft: 10
          }}
        >
          <Text style={{ fontSize: 20 }}>
            {questionNumber}/{deck.questions.length}
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 36,
              paddingLeft: 20,
              paddingRight: 20,
              textAlign: "center"
            }}
          >
            {this.state.questionMode
              ? deck.questions[questionNumber - 1].question
              : deck.questions[questionNumber - 1].answer}
          </Text>

          <TouchableHighlight onPress={this.onPressAnswer} underlayColor="#fff">
            <Text
              style={{
                fontSize: 20,
                color: "red",
                fontWeight: "bold",
                paddingTop: 20
              }}
            >
              {this.state.questionMode ? "Answer" : "Question"}
            </Text>
          </TouchableHighlight>

        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 50
          }}
        >
          <Button
            title="Correct"
            onPress={this.onPressCorrect}
            backgroundColor="green"
            textColor="white"
          />

          <Button
            title="Incorrect"
            onPress={this.onPressIncorrect}
            backgroundColor="red"
            textColor="white"
          />

        </View>
      </View>
    );
  }

  onPressAnswer = () => {
    this.setState({ questionMode: !this.state.questionMode });
  };

  onPressCorrect = () => {
    let numberCorrect = this.state.numberCorrect + 1;
    let questionNumber = this.state.questionNumber + 1;
    if (questionNumber < this.state.deck.questions.length + 1) {
      this.setState({ numberCorrect, questionNumber, questionMode: true });
    } else {
      this.showAlert(questionNumber, this.state.deck, numberCorrect, this.state.numberIncorrect);
    }
  };

  onPressIncorrect = () => {
    let numberIncorrect = this.state.numberIncorrect + 1;
    let questionNumber = this.state.questionNumber + 1;
    if (questionNumber < this.state.deck.questions.length + 1) {
      this.setState({ numberIncorrect, questionNumber, questionMode: true });
    } else {
      this.showAlert(questionNumber, this.state.deck, this.state.numberCorrect, numberIncorrect);
    }
  };

  showAlert(questionNumber, deck, numberCorrect, numberIncorrect) {
    if (questionNumber == deck.questions.length + 1) {
      Alert.alert(
        "Quiz Over",
        "You got " +
          numberCorrect +
          " correct and " +
          numberIncorrect +
          " incorrect.",
        [
          {
            text: "OK",
            onPress: () => {
              this.props.navigation.navigate("DeckListScreen");
            }
          }
        ]
      );
      return null;
    }
  }
}

const mapStateToProps = state => {
  let decks = state.app.decks;

  return { decks };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
