import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const AddMovie = gql`
    mutation addMovie($data: MovieInput) {
        addMovie(movie: $data) {
            title
            poster_path
            tag
            status
            overview
        }
    }
`

class addMovie extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            overview: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input onChange={ this.handleInput } type="text" name="title" placeholder="Title" />
                <input onChange={this.handleInput} type="text" name="overview" placeholder="overview" />
                <Mutation mutation = { AddMovie } >
                {
                    (addMovie, { movie } ) => (
                        <button onClick={() => { addMovie({ 
                            variables: {
                                title: this.state.title,
                                overview: this.state.overview
                            }
                        }) } } >Add Movie</button>
                    )
                }
                </Mutation>
            </div>
        );
    }
}

export default addMovie;