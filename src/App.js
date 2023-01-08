import './App.css';
import Features from './components/Features';
import Flexibility from './components/Flexibility';
import Footer from './components/Footer';
import Hero from './components/Hero';
import List from './components/List';
import Testimonials from './components/Testimonials';

function App ()
{
  return (
    <div className='App font-inter'>
      <Hero />
      <Features />
      <List />
      <Flexibility />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
