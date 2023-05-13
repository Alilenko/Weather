import { Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import {useSelector} from 'react-redux'
import Thank from "./components/Form/Thank/Thank";



function App() {

  return (
    <div className='container'>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
