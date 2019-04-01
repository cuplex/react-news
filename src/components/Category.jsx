import React, { Component } from 'react'
import CategoryForm from './CategoryForm'
import CategoryList from './CategoryList'

export default class Category extends Component {
  render () {
    const { categories, addCategory, selectCategory} = this.props

    return (
      <div>
        <CategoryForm onSubmit={addCategory}/>
        <CategoryList categories={categories} selectCategory={selectCategory}/>
      </div>
    )
  }
}