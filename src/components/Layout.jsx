// Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {/* Fixed position element */}
      <a
        href="https://wa.me/+2348027994029"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 top-24 right-12 flex items-center gap-2 cursor-pointer "
      >
        <img src="/whh.png" alt="" width={40} className="mr-2" />
        <h1 className="text-darkText font-semibold bg-white p-2 rounded-md shadow-md">
          Get free consultation
        </h1>
      </a>

      {/* Render children (pages) */}
      {children}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
