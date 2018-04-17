import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import axios from 'axios'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      time: 0,
      entertainme: [],
      loading: false
    }
  }

  getAllData() {
    var start = new Date().getTime();
    var end = null
    this.setState({
      ...this.state,
      loading: true
    })
    axios.get('http://localhost:3002/api/orkestrator')
    .then(({data}) => {
      end = new Date().getTime()
      this.setState({
        ...this.state,
        entertainme: data,
        loading: false,
        time: `${end - start} msec`
      })
    })
    .catch(err => {
      console.error(err);
    })
  }

  componentWillMount(){
    this.getAllData()
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text> Orkestrator Time Redis </Text>
          <Text style={{fontSize:30}}>
            {this.state.time}
          </Text>
          <Button
            onPress={() => this.getAllData()}
            title="Reload"
          />
          <Button
            onPress={() => this.props.navigation.navigate('GraphqlMain')}
            title="To GrapghQL"
          />
          <Text> CRUD Data Api REST in http://ec2-52-14-45-184.us-east-2.compute.amazonaws.com:3002/api/orkestrator </Text>
        </View>
      </ScrollView>
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
