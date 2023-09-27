import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import ColorList from './ColorList';
import Color from './Color';
import NewColorForm from './NewColorForm';
import './App.css';


function App() {
  const [colors, setColors] = useState([/* Initial colors */]);

  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm setColors={setColors} />} />
        <Route path="/colors/:color" element={<Color colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
}

export default App;
