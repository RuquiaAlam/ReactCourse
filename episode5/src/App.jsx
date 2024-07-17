import "./App.css";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import SignUp from "./components/SignUp.jsx";
import Profile from "./components/Profile.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import { useState, createContext } from "react";
import ChangeProfile from "./components/ChangeProfile.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FormEg from "./components/FormEg.jsx";

export const AppContext = createContext(null);

function App() {
  const [userName, setUserName] = useState("Pedro");
const client = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:true,
    }
  }
});
  return (
    <>
      <QueryClientProvider client={client}>
        <h1>React Router DOM</h1>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<FormEg />} />
            <Route path="/changeProfile" element={<ChangeProfile />} />
            <Route path="/*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
