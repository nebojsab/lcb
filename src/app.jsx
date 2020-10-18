import React from 'react'
import { hot } from 'react-hot-loader/root'
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Breadcrumbs />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default hot(App)
