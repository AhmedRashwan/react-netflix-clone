import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
