import './App.css';
import {Routes,Route} from "react-router-dom"
import {Login,Landing, Signup,Home} from "./features"
import { Navbar,Footer } from './component';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
       <Route path="/" element={<Landing />} />
       <Route path="login" element={<Login />} />
       <Route path="signup" element={<Signup />} />
       <Route path="/home" element={<Home />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
