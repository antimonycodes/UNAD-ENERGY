// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Faqs from './pages/Faqs';
import Home from './pages/Home';
import Store from './pages/Store';
import Project from './pages/Project';
import ProjectDetails from './components/project/ProjectDetails';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/store" element={<Store />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </Layout>
  );
}

export default App;
