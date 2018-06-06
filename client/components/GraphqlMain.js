import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';

const client = new ApolloClient({ uri: 'http://192.168.1.20:3002/graphql' });

const GET_ORKESTRA = gql`
  query {
    orkestrator {
      Movies{
        _id
      overview
      title
      poster_part
      popularity
      }
      tvSeries{
        _id
      overview
      title
      poster_part
      popularity
      }
    }
  }
`

export default class Orkestra extends Component {
  constructor() {
    super()
    this.state = {
      startGraph: new Date().getTime(),
    }
  }

  getAllData(){
    this.setState({
      startGraph: new Date().getTime()
    })
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <ScrollView>
          <View style={styles.container}>
            <Query query={GET_ORKESTRA}>
              {({ loading, error, data }) => {
                if (loading) return <Text>Loading...</Text>;
                if (error) return <Text>Error :(</Text>;
                if (data) {
                  var end = new Date().getTime()
                  return (
                    <View style={styles.container}>
                      <Text> Orkestrator Time Graphql </Text>
                      <Text style={{ fontSize: 30 }}>{end - this.state.startGraph} msec</Text>
                      <Button
                        onPress={() => this.getAllData()}
                        title="Reload"
                      />
                    </View>
                  )
                }
              }}
            </Query>
            <Text> CRUD Data Api REST in http://ec2-52-14-45-184.us-east-2.compute.amazonaws.com:3002/api/orkestrator </Text>
          </View>
        </ScrollView>
      </ApolloProvider>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});