import React from 'react';
import HeaderLayouts from './header';
import Footer from './footer';

// Layout component
const Layout = ({ children }) => { //tham so //desctructuring
  return (
    <div className="layout">
      <HeaderLayouts />
      <main>
        {children}  {/* Các component con sẽ được render tại đây */}
      </main>
     <Footer/>
    </div>
  );
};

export default Layout;
