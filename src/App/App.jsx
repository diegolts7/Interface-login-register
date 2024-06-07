import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "../components/pages/login-register/LoginRegister.jsx";
import { ContextTheme } from "../context/themeContext/ThemeContext.jsx";
import { useContext } from "react";
import Home from "../components/pages/home/Home.jsx";
import { VerificacoesContext } from "../context/verificacoesContext/VerificacoesContext.jsx";

function App() {
  const { theme } = useContext(ContextTheme);
  return (
    <VerificacoesContext>
      <div className={`${theme}`}>
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginRegister />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </Router>
      </div>
    </VerificacoesContext>
  );
}

export default App;
