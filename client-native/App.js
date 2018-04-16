import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// apollo graph
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'
import gql from "graphql-tag";

// screens
import Main from './src/screens/Main.js'

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Text>Entertain/Me</Text>
          <Main />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
