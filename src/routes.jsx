import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Resources from './pages/Resources';
import AddResource from './pages/AddResource';
import EditResource from './pages/EditResource';
import ResourceDetails from './pages/ResourceDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/new" element={<AddResource />} />
      <Route path="/resources/:id" element={<ResourceDetails />} />
      <Route path="/resources/:id/edit" element={<EditResource />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
