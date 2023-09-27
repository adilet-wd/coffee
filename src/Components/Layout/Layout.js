import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <>
            <Header></Header>
            <main className='page_block'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Layout;
