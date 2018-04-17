import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Main from './components/Main'

const StackNav = StackNavigator({
  Main: {
    screen: Main
  }
}, { initialRouteName: 'Main' });

export default TabNavigator({
  Main: {
    screen: StackNav,
    navigationOptions: {
      tabBarLabel: "Main",
      tabBarIcon: ({tintColor}) => <Text>Main</Text>
    }
  }
}, {
  headerMode: 'none',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#222',
    showIcon: true
  }
});

