import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import CatIndex from './pages/CatIndex.js';
import CatShow from './pages/CatShow.js';
import CatNew from './pages/CatNew.js';
import CatEdit from './pages/CatEdit.js';
import NotFound from './pages/NotFound.js';
import mockCats from './mockCats.js'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: mockCats
    }
  }

  createNewCat = (newCat) => {
    console.log(newCat);
  }

  editCat = (editcat, id) => {
    console.log("editcat:", editcat)
    console.log("id:", id)
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catindex"
            render={(props) => <CatIndex cats={this.state.cats} />} />
          <Route path="/catshow/:id" render={(props) => {
            let id = props.match.params.id
            let cat = this.state.cats.find(cat => cat.id === parseInt(id))
            return (
              <CatShow cat={cat} />
            )
          }}
          />
          <Route path="/catnew" render={(props) => <CatNew createNewCat={this.createNewCat} />} />
          <Route path="/catedit/:id"
            render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === parseInt(id))
              return (
                <CatEdit
                  editCat={this.editCat}
                  cat={cat} />
              )
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
