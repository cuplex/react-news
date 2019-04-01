import React, { Component } from 'react';
import { connect } from 'react-redux'
import Category from './components/Category'
import News from './components/News'
import { addCategory, selectCategory } from './reducers/Categorias'
import { addNews } from './reducers/Noticias'
import { reset } from 'redux-form'
import './App.css';

class App extends Component {
  render() {
    const { categories, addCategory, news, addNews, selectCategory, selected } = this.props
    return (
      <div className="App">
        <Category
          categories={categories}
          addCategory={addCategory}
          selectCategory={selectCategory}
        />
        <News news={news} addNews={addNews} selectedCategory={selected}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  const { Categorias: { data: categories, selected } } = state
  const { Noticias: { data: news } } = state

  console.log(categories)
  console.log(news)
  console.log({news})

  return {
    categories,
    news: news.filter(n => n.categoryId === selected),
    selected
  }
}

const mapDispatchToProps = dispatch => ({
  addCategory: payload => {
    dispatch(addCategory(payload))
    dispatch(reset('category'))
  },
  selectCategory: payload => {
    dispatch(selectCategory(payload))
  },
  addNews: payload => {
    dispatch(addNews(payload))
    dispatch(reset('news'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
