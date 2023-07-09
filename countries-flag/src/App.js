import CountriesNames from "./CountriesName";
import "./App.css";
import data from "./CountriesAll.json";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Where is the world?</h1>
        <CountriesNames props={data} />
      </header>
      ;
    </div>
  );
}

export default App;
