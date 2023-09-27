import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from './Components/Header/Header';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// Страницы
import Home from './Pages/Home/Home'
import Catalog from './Pages/Catalog/Catalog'
import Blog from './Pages/Blog/Blog'
import Contacts from './Pages/Contacts/Contacts'
import Notfoundpage from './Pages/Notfoundpage/Notfoundpage'
import Blogpost from './Pages/Blogpost/Blogpost';
import Product from './Pages/Product/Product';
import Layout from './Components/Layout/Layout';

// Страницы блога
import BlogRabustaIArabica from './Pages/BlogPages/BlogRabustaIArabica/BlogRabustaIArabica';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector(".navbar-toggler").click();
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Product />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/robusta-i-arabica" element={<BlogRabustaIArabica/>} />
          {/* <Route path="/blog/:id" element={<Blogpost />} /> */}
          {/* <Route path="/blog/*" element={<Notfoundpage />} /> */}
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>


  );
}

export { App };
