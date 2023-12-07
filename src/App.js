import 'tailwindcss/tailwind.css';
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import CareerSummary from "./components/CareerSummary";
import Contact from "./components/Contact";
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="App bg-slate-300">
      <Navbar/>
      <AboutMe/>
      <Projects/>
      <CareerSummary/>
      <Contact/>
      <Achievements/>
    </div>
  );
}

export default App;
