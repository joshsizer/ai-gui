import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/main";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/index.html" element={<Navigate replace to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
