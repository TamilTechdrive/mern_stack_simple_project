import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Updateuser from "./components/updateuser/updateuser";
import Postuser from "./components/postuser/postuser";
import Nomatch from "./components/nomatch/nomatch";
import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<Postuser />} />
          <Route path="/user/:id" element={<Updateuser />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
