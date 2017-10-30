import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
import { BackHandler } from "react-native";

// here is our redux-aware our smart component
class ReduxNavigation extends React.Component{

  constructor(props) {
    super(props);

   this.isRootScreen = this.isRootScreen.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (this.isRootScreen(nav)) {
      return false;
    }
    dispatch(ReactNavigation.NavigationActions.back());
    return true;
  };

isRootScreen = (navigator) => {
	if (navigator.index == null) {
		return true;
	}

	if (navigator.index > 0) {
		return false;
	}

	return !navigator.routes || !navigator.routes.find(route => !this.isRootScreen(route));
}

  render(){
  const { dispatch, nav } = this.props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <AppNavigation navigation={navigation} />
  }
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
