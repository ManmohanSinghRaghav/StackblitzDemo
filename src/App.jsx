import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./Styles/Stack.css";
import "./Styles/Text.css";
import "./Styles/BottomDivLight.css";
import "./Styles/quotes.css";
import "./Styles/Paras.css";
import "./Styles/Index.css";
import Home from "./Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
