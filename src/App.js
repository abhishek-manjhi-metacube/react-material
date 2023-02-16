import "./App.css";
import Table from "./components/table";
import mockData from "./utils/mock.json";


function App() {
  return (
    <div className="App">
      <header>
        <h1>Smart Table</h1>
      </header>
      <div className="smartTable">
        <Table mockData={mockData} />
      </div>
    </div>
  );
}

export default App;
