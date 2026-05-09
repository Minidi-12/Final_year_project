import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import { store } from './lib/store';
import { Provider } from 'react-redux';
import Home from './pages/Home.page.jsx';
import About from './pages/About.page.jsx';
import RequestSupport from './pages/Request.page';
import Login from './pages/Login.page';
import Volunteer from './pages/Volunteer.page.jsx';
import GNDashboard from './pages/Gndashboard.page';
import Layout from './components/Layout';
import Projects from './pages/Projects.page';
import ProjectDetail from './pages/Projectsdetails.page';
import Achievements from './pages/Achievements.page';
import Activities from './pages/Activities.page';
import Campaigns from './pages/Campaigns.page';
import UpcomingActivities from './pages/Upcomingactivities.page';
import ReportsResearches from './pages/Reports.page';
import ContactUs from './pages/Contactus.page';
import VerificationDetail from './pages/Verificationdetail.page';
import Donate from './pages/Donate.page';
import AdminDashboard from './pages/Admindashboard.page';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<GNDashboard />} />
          <Route path="/verify/:id" element={<VerificationDetail />} />
          <Route path="/request-support" element={<RequestSupport />} />
          <Route path="/dashboard" element={<AdminDashboard/>}/>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/upcoming-activities" element={<UpcomingActivities />} />
            <Route path="/reports-and-researches" element={<ReportsResearches />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/donate" element={<Donate/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
)