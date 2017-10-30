import { AsyncStorage } from "react-native";
import Creators from "../Redux/AppRedux";

const KEY = "DECK";

export function getDecks() {
  // AsyncStorage.setItem(KEY, '');
  return (dispatch, getState) => {
    AsyncStorage.getItem(KEY)
      .then(response => {
        let items = JSON.parse(response);
        let decks = Object.keys(items).map(item => items[item]);
        return dispatch(Creators.decks(decks));
      })
      .catch(err => {
        return dispatch(Creators.decks([]));
      });
  };
}

export function saveDeckTitle(title) {
  return (dispatch, getState) => {
    AsyncStorage.getItem(KEY)
      .then(response => {
        let decks = response ? JSON.parse(response) : {};
        if (decks.hasOwnProperty(title)) {
          return false;
        }

        decks[title] = { title };

        AsyncStorage.setItem(KEY, JSON.stringify(decks));

        let d = Object.keys(decks).map(title => decks[title]);

        dispatch(Creators.decks(d));

      })
      .catch(err => {
        dispatch(Creators.decks([]));

      });
  };
}

export function addCardToDeck(title, card) {
  return (dispatch, getState) => {
   AsyncStorage.getItem(KEY)
      .then(response => {
        let decks = response ? JSON.parse(response) : {};

        let deck = null;
        Object.keys(decks).forEach((id, index) => {
          if (id == title) {
            deck = decks[id];
          }
        });

        if (!deck.hasOwnProperty("questions")) {
          deck.questions = [];
        }
        deck.questions.push(card);
        decks[title] = deck;

        AsyncStorage.setItem(KEY, JSON.stringify(decks));

        let d = Object.keys(decks).map(title => decks[title]);

       return dispatch(Creators.decks(d));
      })
      .catch(err => {
         return dispatch(Creators.decks([]));
      });
  };
}
