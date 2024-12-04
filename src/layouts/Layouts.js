import React from 'react';
import HeaderLayouts from './header';
import Footer from './footer';

// Layout component
const Layout = ({ children }) => { //tham so //desctructuring
  return (
    <div className="layout">
      <HeaderLayouts />
      <main>
        <div style={{display: 'flex'}}>
          <h1>SideBar</h1>
        {children}  {/* Các component con sẽ được render tại đây */}
        </div>
      </main>
     <Footer/>
    </div>
  );
};

export default Layout;
