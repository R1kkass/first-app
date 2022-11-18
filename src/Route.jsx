import './App.css';
import Header from './components/UI/Header/Header';
import {Routes, Route, useParams, Link, BrowserRouter} from "react-router-dom"
import Home from './components/pages/Home/Home';
import DeviceInfo from './components/pages/DeviceInfo/DeviceInfo';
import About from './components/pages/About/About';
import Authorization from './components/pages/Authorization/Authorization';
import Contact from './components/pages/Contact/Contact';
import Basket from "./components/pages/Baket/Basket"
import Lending from './components/pages/Lending/Lending';
import ServicesEquipment from './components/pages/ServicesEquipment/ServiceEquipment';
import PaymantDelivery from './components/pages/PaymantDelivery/PaymantDelivery';
import Image from './components/pages/Image/Image';
import Registration from './components/pages/Registration/Registration';
import Sale from './components/pages/Sale/Sale';
import Weatch from './components/pages/Weath/Weath';
import News from './components/pages/News/News';

function MyRouters() {
  return (
    <BrowserRouter>
    <Header>
      <Routes>
        <Route path="/device" element={<Home />} />  
        <Route path="/device/:id" element={<DeviceInfo />} />        
        <Route path="/" element={<About />} />
        <Route path="/authorization" element = {<Authorization />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/basket" element = {<Basket />} />
        <Route path="/landing" element = {<Lending />} />
        <Route path="/servicesequipment" element = {<ServicesEquipment />} />
        <Route path="/paymantdelivery" element = {<PaymantDelivery />} />
        <Route path="/image" element = {<Image />} />
        <Route path="/registration" element = {<Registration />} />
        <Route path="/sale" element = {<Sale />} />
        <Route path="/weather" element = {<Weatch />} />
        <Route path="/news" element = {<News />} />
        </Routes>
    </Header>
    </BrowserRouter>
  );
}

export default MyRouters;