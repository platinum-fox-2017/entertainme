import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    const data = this.props.data
    return (
      <div key={data.title}>
        <img src={data.poster_path} alt="poster not found" className="poster" />
        <h3>{`${data.title}`}</h3>
        <small>{ `${data.popularity}/10` }</small>
        <p>{ data.overview }</p>
      </div>
    )
  }
}
