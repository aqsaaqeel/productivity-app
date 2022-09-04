import './App.css';
import './index.css';
import {Routes,Route} from "react-router-dom"
import {Login,Landing, Signup,Home} from "./features"
import { Navbar,Footer } from './component';
import  Todo from './component/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
       <Route path="/" element={<Landing />} />
       <Route path="login" element={<Login />} />
       <Route path="signup" element={<Signup />} />
       <Route path="/home" element={<Home />} />
       <Route path="/todo" element={<Todo />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
