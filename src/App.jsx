import { useState, useRef } from 'react';
import { Header, Main, Footer } from './page'
import './App.scss';
import { Container } from './components';
import 'antd/dist/antd.css'

function App() {
    return (
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    )
}

export default App;
