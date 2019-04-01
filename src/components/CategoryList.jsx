import React, { Component } from 'react'

export default class CategoryList extends Component {
  
  handleClick = id => e => {
    const { selectCategory } = this.props
    selectCategory(id)
  }

  render () {
    const { categories } = this.props

    return (
      <ul>
        {categories.map(category => 
          <li key={category.id}>
            {category.name}
            <button onClick={this.handleClick(category.id)}>Select</button>
          </li> 
        )}
      </ul>
    )
  }
}