import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/login';
import PostList from './screens/post-lists';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import SplashScreen from './screens/splash-screen';

const MainRoutes = {
  PostList: PostList
};

const AuthRoutes = {
  login: Login
};

const mainNavigation = createStackNavigator(MainRoutes, {
  initialRouteName: 'PostList',
  headerMode: 'none'
});

const authNavigation = createStackNavigator(AuthRoutes, {
  initialRouteName: 'login',
  headerMode: 'none'
});

const navigationRoutes = createSwitchNavigator(
  {
    Auth: authNavigation,
    Main: mainNavigation,
    Splash: SplashScreen
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

// export const NavigationApp = createAppContainer(navigationRoutes);
export const navReducer = createNavigationReducer(navigationRoutes);
export const navMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root'
);
const AppWithNavigationState = createReduxContainer(navigationRoutes, 'root');

class NavigationComponent extends React.Component {
  render() {
    const { nav, dispatch, isConnected } = this.props;

    return <AppWithNavigationState state={nav} dispatch={dispatch} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(NavigationComponent);
