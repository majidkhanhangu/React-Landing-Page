
import './App.css';
import Featuresection from './Component/Featuresection';
import Herosection from './Component/Herosection';
import Navbar from './Component/Navbar';
import Pricing from './Component/Pricing';
import Workflow from './Component/Workflow';
import Testimonials  from './Component/Testimonials';
import Footer from './Component/Footer';


function App() {
  return (
    <main>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <Herosection/>
    <Featuresection/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </div>
    </main>
  );
}

export default App;
