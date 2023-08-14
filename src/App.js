import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Containters/Landing';
import Personal from './Containters/StepOne';
import Business from './Containters/StepTwo';
import Final from './Containters/StepThree';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Landing />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/business" element={<Business />} />
      <Route path="/submitted" element={<Final />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
