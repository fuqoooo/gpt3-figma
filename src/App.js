import React from 'react'

import { Footer, Blog, Header, Possibility, WhatGPT3, Features } from "./containers"
import { Article, Brand, Cta, Feature, Navbar } from "./components";
import "./app.css";



const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
