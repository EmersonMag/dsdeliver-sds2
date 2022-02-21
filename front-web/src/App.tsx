import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Routes from './Routess';


function App() {
  return (
    <>
      <Routes />
      <ToastContainer />

    </>
   );
}

export default App;