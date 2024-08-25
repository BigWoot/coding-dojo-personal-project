import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AllLocations from './views/AllLocations.jsx';
import LocationForm from './views/LocationForm.jsx';
import LocationEdit from './views/LocationEdit.jsx';
import LocationDetails from './views/LocationDetails.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/locations" element={<AllLocations />} />
          <Route path="/locations/new" element={<LocationForm />} />
          <Route path="/locations/:id/edit" element={<LocationEdit />} />
          <Route path="/locations/:id/details" element={<LocationDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
