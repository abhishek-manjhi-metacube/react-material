import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BasicForm from "./components/basic-form";
import FormikYup from "./components/formik-yup";
import Table from "./components/table";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Smart Table</h1>
      </header>
      <div className="smartTable">
        <Router>
          <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/formik" element={<BasicForm />} />
            <Route path="/formik-yup" element={<FormikYup />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
