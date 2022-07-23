import { Header, Main, Footer } from './page'
import './App.scss';
import { Container } from './components';
import 'antd/dist/antd.css'

function App() {
    return (
      <div className='bigContainer'>
      <Container>
        <Header />
        <Main />
      </Container>
        <Footer />
      </div>
    )
}

export default App;
