import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePageComponent from './components/HomePageComponent';
import NavBarComponent from './components/NavBarComponent';
import HelloComponent from './components/HelloComponent';
import AddNumComponent from './components/AddNumComponent';
import AskQComponent from './components/AskQComponent';
import GreaterOrLessComponent from './components/GreaterOrLessComponent';
import MadLibsComponent from './components/MadLibsComponent';
import OddOrEvenComponent from './components/OddOrEvenComponent';
import ReverseitAlphaComponent from './components/ReverseitAlphaComponent';
import ReverseitNumComponent from './components/ReverseitNumComponent';
import MagicComponent from './components/MagicComponent';
import RestaurantComponent from './components/RestaurantComponent';

function App() {
  return (
    <>
      <BrowserRouter>

        

        <Routes>
          <Route path='/' element={<HomePageComponent />} />
          <Route path='hello' element={<HelloComponent />} />
          <Route path='sums' element={<AddNumComponent />} />
          <Route path='questions' element={<AskQComponent />} />
          <Route path='gorl' element={<GreaterOrLessComponent />} />
          <Route path='Mad' element={<MadLibsComponent />} />
          <Route path='ooe' element={<OddOrEvenComponent />} />
          <Route path='reva' element={<ReverseitAlphaComponent />} />
          <Route path='revn' element={<ReverseitNumComponent />} />
          <Route path='magic' element={<MagicComponent />} />
          <Route path='rest' element={<RestaurantComponent />} />
        </Routes>

        <NavBarComponent />

      </BrowserRouter>
    </>
  );
}

export default App;
