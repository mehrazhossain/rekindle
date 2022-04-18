import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import { Routes, Route } from 'react-router-dom';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Blogs from './components/Blogs/Blogs';
import AboutMe from './components/AboutMe/AboutMe';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';

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
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<AboutMe></AboutMe>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
