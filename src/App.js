import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import User from "./components/User";
import "./components/style.css";
import Filter from "./components/Filter";
import ContactUs from "./components/CotactUs";
import Company from "./components/Company";
import Channel from "./components/Channel";
import Other from "./components/Other";
import Login from "./components/Login";
import Protected from "./components/Protected";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Protected Component={Contact} />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/filter" element={<Protected Component={Filter} />} />
        <Route path="*" element={<Error />} />
        <Route path="/contactUs" element={<ContactUs />}>
          <Route path="company" element={<Company />} />
          <Route path="channel" element={<Channel />} />
          <Route path="others" element={<Other />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      {/*  nested routing */}
      {/* <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
