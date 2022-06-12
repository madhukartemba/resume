import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Achievements from './Achievements';
import Contact from './Contact';
import './style.css';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';

function App() {


  let [scroll, setScroll] = useState(0);

  let [active, setActive] = useState(0);

  let [gyro, setGyro] = useState([0, 0, 0]);

  let [mouseloc, setMouseloc] = useState({ x: 0, y: 0 })

  let [hasgyro, setHasgyro] = useState(true);

  let [scrollPos, setScrollPos] = useState({

    home: 0,
    achievements: 0,
    contact: 0,

  })



  function setPageScrollPos(id) {

    try {


      if (id === "home") {
        setScrollPos({
          home: scroll,
          achievements: scrollPos.achievements,
          contact: scrollPos.contact
        })

      }
      else if (id === "contact") {
        setScrollPos({
          home: scrollPos.home,
          achievements: scrollPos.achievements,
          contact: scroll
        })

      }
      else if (id === "achievements") {
        setScrollPos({
          home: scrollPos.home,
          achievements: scroll,
          contact: scrollPos.contact
        })

      }
      else {
        throw new Error("setPageScrollPos id is incorrect: " + id);
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  let prevScroll = 0;



  useEffect(() => {


    window.addEventListener('scroll', () => {

      let currentScroll = window.scrollY;
      if (Math.abs(prevScroll - currentScroll)>500) {

        prevScroll = currentScroll;

        window.navigator.vibrate(20);
      }
      setScroll(currentScroll);

    })



    window.addEventListener('mousemove', (ev) => {

      let mx = ev.screenX;
      let my = ev.screenY;

      setMouseloc({ x: mx, y: my });

    });

    window.addEventListener('deviceorientation', (ev) => getAngle(ev));

  }, [])

  function getAngle(ev) {
    if (!ev.gamma && !ev.alpha && !ev.beta) {
      setHasgyro(false);
      return
    }


    let rx = ev.gamma * 3;
    let ry = ev.beta * 3;

    if (window.screen.availHeight < window.screen.availWidth) {
      //If in landscape mode then swap rx and ry

      let temp = rx;
      rx = ry;
      ry = temp;

    }

    let rz = ev.alpha;

    setGyro([rx, ry, rz]);

  }


  function setActivePage(id) {
    setActive(id);
  }


  return (
    <div>
      <Router>
        <NavBar active={active} scroll={scroll} />

        <Routes>
          <Route exact={true} path="/" element={<Home active={setActivePage} scroll={scroll} gyro={gyro} mouseloc={mouseloc} hasgyro={hasgyro} scrollPos={scrollPos} setPageScrollPos={setPageScrollPos} />} />
          <Route path="/achievements" element={<Achievements active={setActivePage} scroll={scroll} gyro={gyro} mouseloc={mouseloc} hasgyro={hasgyro} scrollPos={scrollPos} setPageScrollPos={setPageScrollPos} />} />
          <Route path="/contact" element={<Contact active={setActivePage} scroll={scroll} gyro={gyro} mouseloc={mouseloc} hasgyro={hasgyro} scrollPos={scrollPos} setPageScrollPos={setPageScrollPos} />} />
          <Route path="*" element={<Home active={setActivePage} scroll={scroll} gyro={gyro} mouseloc={mouseloc} hasgyro={hasgyro} scrollPos={scrollPos} setPageScrollPos={setPageScrollPos} />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
