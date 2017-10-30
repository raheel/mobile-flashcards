import React, { Component } from "react";
import { ScrollView, Text, View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import Deck from "../Components/Deck";
import Button from '../Components/Button'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/IndividualDeckScreenStyle";

class IndividualDeckScreen extends Component {
  render() {
    const title = this.props.navigation.state.params.title;
    
    
    deck = this.props.decks.filter(deck => deck.title === title)[0];
    
        

    if (deck == null) {
      return <TouchableOpacity onPress={()=>{
    
    this.props.navigation.navigate('DeckListScreen', {'deck': deck});
   // this.state.nav.push();
  }}><Text>test</Text></TouchableOpacity>;
    }

    return <View style={{flex: 1}}> 
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
        <Deck
          title={deck.title}
          numberOfCards={deck.questions ? deck.questions.length : 0}
          showBorder="false"
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button style={{width: 100}} onPress={()=>this.addCard(deck)} title="Add Card" backgroundColor="black" textColor="white"/>
        {deck.questions && deck.questions.length>0 ?
        <Button style={{width: 100}} onPress={()=>this.startQuiz(deck)}  title="Start Quiz" backgroundColor="white" borderColor="black" textColor="black"/>
        : null}
            </View>
    </View>;
  }

  addCard(deck){
    
   this.props.navigation.navigate('NewQuestionScreen', {'title': deck.title});

  }

    startQuiz(deck){
    
   this.props.navigation.navigate('QuizScreen', {'title': deck.title,  'questionNumber':1});

  }
}

const mapStateToProps = state => {
  let decks = state.app.decks;
    

  return { decks };
};

const mapDispatchToProps = dispatch => {
  return {
   loadDecks: () => dispatch(getDecks())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(
  IndividualDeckScreen
);
