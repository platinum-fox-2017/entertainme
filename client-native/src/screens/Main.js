import React from 'react'
import {
  StyleSheet, Dimensions,
  Text, View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

import { Query, Mutation } from 'react-apollo'
import { movieQuery, entertainMe } from '../query/index.js'
import { addTestShow } from '../mutation/index.js'

class Main extends React.Component {
  _keyExtractor = (item, index) => `movie-${index}`
  _renderItem = ({ item }, index) => (
    <View style={ styles.movie }>
      <Text>{ item.title }</Text>
      <Text>{ item.overview }</Text>
    </View>
  )
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
              onPress={ () => addMovie({variables: {input: movieData}}) }
            >
              <Text>Add Test Movies{ movieData.title }</Text>
            </TouchableOpacity>
          )}
        </Mutation>

        <Query query={ movieQuery } >
          {({ loading, error, data }) => {
            if (loading) return <Text style={styles.loading}>Loading...</Text>;
            if (error) return <Text style={styles.error}>Error :(</Text>;

            return (
              <FlatList
                data={ data.movies }
                keyExtractor={ this._keyExtractor }
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
  },
  movie: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width*9/10,
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
