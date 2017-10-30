import React, { Component } from "react";
import { Alert, Text, TextInput, View, StyleSheet } from "react-native";
import Button from "../Components/Button";
import { connect } from "react-redux";
import { saveDeckTitle } from "../Services/DeckApi";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

class NewDeckScreen extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 150
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
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ title: text })}
          value={this.state.title}
        />
        <Button
          onPress={this.onSubmit}
          title="Submit"
          backgroundColor="black"
          borderColor="black"
          textColor="white"
        />
      </View>
    );
  }

  onSubmit() {
    let duplicate =
      this.props.decks.filter(deck => deck.title === this.state.title).length > 0;
    if (duplicate) {
      Alert.alert("Duplicate Entry", "Deck with same name exists", [
        {
          text: "OK"
        }
      ]);
    } else {
      this.props.saveDeckTitle(this.state.title);

      Alert.alert("Successfully Added", "New deck was successfully added", [
        {
          text: "OK",
          onPress: () => {
            this.setState({ title: "" });
            this.props.navigation.navigate("DeckListScreen");
          }
        }
      ]);
    }
  }
}

var styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    width: 250
  }
});

const mapStateToProps = state => {
  let decks = state.app.decks;

  return { decks };
};

const mapDispatchToProps = dispatch => {
  return {
    saveDeckTitle: title => dispatch(saveDeckTitle(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckScreen);
