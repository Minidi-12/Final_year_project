import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingAction';
import { Outlet } from "react-router";

export default function Layout() {       
  return (
    <div>
      <Navbar />
      <Outlet />      
      <Footer />
    </div>
  );
}