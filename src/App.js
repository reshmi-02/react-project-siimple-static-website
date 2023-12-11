
import './App.css';
import Banner from './component/banner/banner.js'
import About from './component/about/about.js'
import Card from './component/card/card.js'
import Contact from './component/contact/contact.js'
import Footer from './component/footer/footer.js'
import Accordian from './component/accordian/accordian.js'

function App() {
  return (
    <div>
      <Banner/>
      <About/>
      <Card/>
      <Accordian/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
