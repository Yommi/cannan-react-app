import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home.jsx';
import Footer from './Components/Footer.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Watch from './Components/Watch.jsx';
import EveCal from './Components/EveCal.jsx';
// import GetInvolved from './Components/GetInvolved.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import MobileNav from './Components/MobileNav.jsx';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const updateMenu = (newValue) => {
    setMenuActive(newValue);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MobileNav
        menuActive={menuActive}
        setMenuActive={updateMenu}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              menuActive={menuActive}
              setMenuActive={updateMenu}
            />
          }
        />
        <Route
          path="/aboutUs"
          element={
            <AboutUs
              menuActive={menuActive}
              setMenuActive={updateMenu}
            />
          }
        />
        <Route
          path="/livestream/*"
          element={
            <Watch
              menuActive={menuActive}
              setMenuActive={updateMenu}
            />
          }
        />
        <Route
          path="/events/*"
          element={
            <EveCal
              menuActive={menuActive}
              setMenuActive={updateMenu}
            />
          }
        />
        {/* <Route
          path="/getInvolved/*"
          element={
            <GetInvolved menuActive={menuActive} setMenuActive={updateMenu} />
          }
        /> */}
      </Routes>
      <Footer
        menuActive={menuActive}
        setMenuActive={updateMenu}
      />
    </BrowserRouter>
  );
}

export default App;
