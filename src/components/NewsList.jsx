import React, { Component } from 'react'

export default class NewsList extends Component {
  render () {
    const { news } = this.props

    return (
      <ul>
        {news.map(n => 
          <li key={n.id}>
            {n.name}
          </li> 
        )}
      </ul>
    )
  }
}