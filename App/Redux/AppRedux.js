import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  decks: ['decks']
});

export const AppTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  decks: null
});

/* ------------- Reducers ------------- */

// request the avatar for a user
export const decks = (state, {decks} ) => {
  console.log("---setting AppRedux", decks);

return state.merge({ decks });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DECKS]: decks
});
