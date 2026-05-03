import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingAction';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingActions />
    </>
  );
}