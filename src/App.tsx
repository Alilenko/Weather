import { Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";


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
