import logo from './logo.svg';
import './App.css';
import Header from './sections/Header';
import Navbar from './sections/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
