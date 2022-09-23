import "./App.css";
import Countries from "./components/Countries/Countries";
function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

/*
function LoadAPI() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="c">
      <h2>
        Available Country ::
        <span style={{ color: "blue" }}> {countries.length}</span>
      </h2>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            name={country.name.common}
            area={country.area}
            capital={country.capital ? country.capital[0] : "not available"}
          ></Country>
        ))}
      </div>
    </div>
  );
}
function Country(props) {
  return (
    <div className="country-card">
      <h3>{props.name}</h3>
      <p>Capital city : {props.capital}</p>
      <p>Tota Area={props.area} Square KM</p>
    </div>
  );
}
*/
export default App;
