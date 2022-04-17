import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import { Routes, Route } from 'react-router-dom';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner></Banner>
              <Services></Services>
            </>
          }
        ></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
