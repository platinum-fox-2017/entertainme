import React from 'react'
import {
  StyleSheet, Dimensions,
  Text, View, TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

import { Query, Mutation } from 'react-apollo'
import { movieQuery, entertainMe } from '../query/index.js'
import { addTestShow } from '../mutation/index.js'

import Header from '../components/Header.js'

class Main extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     title: '',
  //     overview: '',
  //     poster_path: '',
  //     popularity: '',
  //     status: '',
  //     tag: []
  //   }
  // }

  // onInput = (text, field) => {
  //   this.setState({
  //     [field]: text
  //   })
  // }

  _keyExtractor = (item, index) => `movie-${index}`

  _renderItem = ({ item }, index) => (
    <View style={ styles.movie }>
      <Text>{ item.title }</Text>
      <Text>{ item.overview }</Text>
    </View>
  )

  _renderHeader = () => {
    return (
      <Header />
    )
  }

  render () {
    return (
      <View style={ styles.container }>
        <Query query={ movieQuery } >
          {({ loading, error, data }) => {
            if (loading) return <Text style={styles.loading}>Loading...</Text>;
            if (error) return <Text style={styles.error}>Error :(</Text>;

            return (
              <FlatList
                data={ data.movies }
                keyExtractor={ this._keyExtractor }
                ListHeaderComponent={ this._renderHeader }
                renderItem={ this._renderItem }
              />
            );
          }}
        </Query>
      </View>
    )
  }
}

export default Main;

let { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
  movie: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingHorizontal: width*1/10/2,
    marginTop: 5,
    marginBottom: 5
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    width: 200,
    height: 70,
  },
  loading: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 25,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25,
  }
});
