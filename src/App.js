import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import SinglePage from './components/SinglePage';
import LegalNotice from './components/Footer/LegalNotice';
import AddARestaurant from './components/Footer/AddARestaurant';
import BecomePartner from './components/Footer/BecomePartner';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu/:id" element={<SinglePage />} />
        <Route path="mentions" element={<LegalNotice/>} />
        <Route path="proposer-un-restaurant" element={<AddARestaurant/>} />
        <Route path="devenir-partenaire" element={<BecomePartner />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
