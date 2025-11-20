import Navbar from './components/Navbar';
import NeuralBrain from './components/3d/NeuralBrain';
import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 overflow-x-hidden">
      <NeuralBrain isDarkMode={true} />
      <SmoothScroll>
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}

export default App;
