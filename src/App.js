import './App.css';
import Header from './components/header';
import Herosec from './components/herosec';
import Cardsec from './components/cardsec';
import Aboutpage from './components/aboutpage';
import Contactus from './components/contactus';
import Footer from './components/footer';
import { createContext } from 'react';



const data = createContext()
const data2 = createContext()

function App() {
//create context, provider, usecontext.
  

  const name = "roshan";
 const lastname = "tambe" 

  return (
    <div className="App">
      <data.Provider value={name} >
      <Header/>
      <Herosec/>
      <Cardsec/>
      <Aboutpage/>
      <Contactus/>
      <Footer/>
      </data.Provider>
      
    </div>
  );
}

export default App;

export {data}