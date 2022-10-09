import  React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
