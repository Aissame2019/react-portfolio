import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Routes>
        <Route path="/react-portfolio" element= {<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react-portfolio/about" index element={<About />} />
          <Route path="/react-portfolio/contact" index element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
