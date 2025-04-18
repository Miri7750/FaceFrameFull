// // src/App.tsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Faces from './pages/Faces';
// import Images from './pages/Images';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/faces" element={<Faces />} />
//         <Route path="/images" element={<Images />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Faces from './pages/Faces';
import Images from './pages/Images';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faces" element={<Faces />} />
        <Route path="/images" element={<Images />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
