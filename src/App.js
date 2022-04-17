import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </>
  );
}

export default App;
