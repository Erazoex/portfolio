import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';

import './App.css';

export function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

