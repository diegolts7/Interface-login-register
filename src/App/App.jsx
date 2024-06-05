import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "../components/pages/login-register/LoginRegister.jsx";
import { ContextTheme } from "../context/themeContext/ThemeContext.jsx";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ContextTheme);
  return (
    <div className={`${theme}`}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginRegister />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
