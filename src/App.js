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
import './index.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    this.catIndex()
  }

  catIndex = () => {
    fetch("http://localhost:3000/cats")
      .then(response => {
        return response.json()
      })
      .then(catsArray => {
        this.setState({ cats: catsArray })
      })
      .catch(errors => {
        console.log("index errors:", errors)
      })
  }

  createNewCat = (newcat) => {
    return fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newcat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => {
        if (response.status === 422) {
          alert("Please check your submission.")
        }
        return response.json()
      })
      .then(payload => {
        this.catIndex()
      })
      .catch(errors => {
        console.log("create errors:", errors)
      })
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
