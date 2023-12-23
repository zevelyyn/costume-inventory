import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateCostume from './pages/CreateCostume';
import ShowCostume from './pages/ShowCostume';
import EditCostume from './pages/EditCostume';
import DeleteCostume from './pages/DeleteCostume';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/costumes/create' element={<CreateCostume />} />
      <Route path='/costumes/details/:id' element={<ShowCostume />} />
      <Route path='/costumes/edit/:id' element={<EditCostume />} />
      <Route path='/costumes/delete/:id' element={<DeleteCostume />} />
    </Routes>
  )
}

export default App