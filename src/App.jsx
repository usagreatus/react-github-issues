import React from 'react';
import Issues from './Issues';
import Details from './Details';
import NavigationBar from './NavigationBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <>
        <NavigationBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Issues />} />
            <Route path="/issues/:id" element={<Details />} />
          </Routes>
        </div>
      </>
    </Router>
  )
}
