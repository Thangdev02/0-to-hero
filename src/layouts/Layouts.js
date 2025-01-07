import React from 'react';
import HeaderLayouts from './header';
import Footer from './footer';

// Layout component
const Layout = ({ children }) => { 
  return (
    <div className="layout">
      <HeaderLayouts />
      <main>
        {children} 
      </main>
     <Footer/>
    </div>
  );
};

export default Layout;
