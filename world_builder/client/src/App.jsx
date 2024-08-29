import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './views/Home.jsx';
import AllLocations from './views/AllLocations.jsx';
import LocationForm from './views/LocationForm.jsx';
import LocationEdit from './views/LocationEdit.jsx';
import LocationDetails from './views/LocationDetails.jsx';
import PersonForm from './views/PersonForm.jsx';
import PersonDetails from './views/PersonDetails.jsx';
import PersonEdit from './views/PersonEdit.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
          {/*Handle routes for locations*/}
            <Route path="/locations" element={<AllLocations />} />
            <Route path="/locations/new" element={<LocationForm />} />
            <Route path="/locations/:id/edit" element={<LocationEdit />} />
            <Route path="/locations/:id/details" element={<LocationDetails />} />
          {/*Handle routes for people*/}
            <Route path="/persons/new" element={<PersonForm />} />
            <Route path="/persons/:id/edit" element={<PersonEdit />} />
            <Route path="/persons/:id/details" element={<PersonDetails />} />
          {/*Handle routes for religions*/}
          {/*Handle routes for races*/}
          {/*Handle routes for events*/}
          {/*Handle routes for items*/}
          {/*Handle routes for settlements*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
