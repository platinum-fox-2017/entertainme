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

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      overview: '',
      poster_path: '',
      popularity: '0',
      status: 'New',
      tag: ['movie']
    }
  }

  onInput = (text, field) => {
    if (text.length < 300) {
      this.setState({
        [field]: text
      })
    }
  }

  newMovie = () => {
    return {
      title: this.state.title,
      overview: this.state.overview,
      poster_path: this.state.poster_path,
      popularity: this.state.popularity,
      status: this.state.status,
      tag: this.state.tag,
    }
  }

  submitMovie = (addMovie) => {
    let input = this.newMovie()
    this.setState({
      title: '',
      overview: '',
      poster_path: '',
    })
    addMovie({variables: { input: input }})

  }

  render () {
    let movieData = {
      poster_path: "some fake link here",
      overview: "this move has been brought to you by code magic",
      title: "flowing throught tubes",
      popularity: "-123",
      status: "ok",
      tag: ["this is a movie"]
    }
    return (
      <View style={ styles.container }>
        <Text>movies</Text>
        <TextInput
          style={ styles.input }
          value={ this.state.title }
          placeholder="title"
          onChangeText={(text) => this.onInput(text, 'title')}
        />
        <TextInput
          style={ styles.input }
          value={ this.state.overview }
          placeholder="Overview"
          onChangeText={(text) => this.onInput(text, 'overview')}
        />
        <TextInput
          style={ styles.input }
          value={ this.state.poster_path }
          placeholder="Image Path"
          onChangeText={(text) => this.onInput(text, 'poster_path')}
        />
        <Mutation
          mutation={ addTestShow }
          update={(cache, {data: {addMovie} }) => {
            // cache will get data of specific query from cache
            const { movies } = cache.readQuery({ query: movieQuery })
            // new data from mutation will be added to cache
            cache.writeQuery({
              query: movieQuery,
              data: { movies: movies.concat([addMovie])}
            })
          }}
        >
          {(addMovie, { data }) => (
            <TouchableOpacity
              style={ styles.button }
              onPress={ () => this.submitMovie(addMovie) }
            >
              <Text>Add Test Movies</Text>
            </TouchableOpacity>
          )}
        </Mutation>
      </View>
    )
  }
}

export default Header;

let { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    width: 300,
    height: 50,
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
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
