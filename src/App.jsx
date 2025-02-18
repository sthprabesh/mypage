// src/App.jsx
import React from 'react';
import './App.css'; // You can keep this for styling, or remove it

const About = () => {
  return (
    <>
      <h2>About</h2>
      <p>This section provides information about the purpose of the page or the organization.</p>
    </>
  );
};

const Services = () => {
  return (
    <>
      <h2>Services</h2>
      <p>This section outlines the services offered. It's a great place to highlight what you can provide.</p>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <h2>Contact</h2>
      <p>This section includes contact details or a form for visitors to reach out.</p>
    </>
  );
};

const App = () => {
  return (
    <>
      <h1>My React App</h1>
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default App;
