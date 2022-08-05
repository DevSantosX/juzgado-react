import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import "./App.scss";
import Main from "./Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
