import React, { Component } from "react";
import {
  FlatList,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import Deck from "../Components/Deck.js";
import { connect } from "react-redux";
import {getDecks} from "../Services/DeckApi.js";
import Button from '../Components/Button'


class DeckListScreen extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    
   this.props.loadDecks();
  }

  render() {
    
    
    let decks = this.props.decks;

console.log('decklistscreen1', decks);
    if (!decks || decks.length==0) {
   return (   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 200, paddingBottom: 20}}>
        <Text style={{fontSize: 30, color: 'black', textAlign: 'center', paddingBottom: 20}}>No decks.{"\n"}Please add one.</Text>
        <Button onPress={()=>this.addDeck()} title="Add Deck" backgroundColor="green" textColor="white"/>
      </View>)
    }

console.log('decklistscreen2', decks);
    

    const data = Object.keys(decks).map(name => decks[name]);

    

    return (
      <FlatList
        style={{ marginTop: 10 }}
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index}
      />
    );
  }

  renderItem(item) {
    item = item.item;
    
    return (
      <TouchableOpacity onPress={() => this.onPress(item)}>
        <Deck
          title={item.title}
          numberOfCards={item.questions ? item.questions.length : 0}
          showBorder={true}
        />
      </TouchableOpacity>
    );
  }

  onPress = item => {
    
    this.props.navigation.navigate("IndividualDeckScreen", { title: item.title });
  };

  addDeck(){
    
   this.props.navigation.navigate('NewDeckScreen');

  }
}

const mapStateToProps = state => {
  let decks = state.app.decks;
    
console.log('mapStateToProps', state);
  return { decks };
};

const mapDispatchToProps = dispatch => {
  return {
   loadDecks: () => dispatch(getDecks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen);
