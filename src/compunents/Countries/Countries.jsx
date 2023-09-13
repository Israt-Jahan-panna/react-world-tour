import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountry] = useState([]);
  const [visitedFlags , setVisitedFlags] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const visitedHandelCountry = (country) => {
    console.log("add to this your vidited county");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountry(newVisitedCountries);
  };
  const handelVisitedFlags  = flag =>{
const newVisitedFlags = [...visitedFlags ,flag]
setVisitedFlags(newVisitedFlags);

  } 

// remove item from an array in a state  
// user filter to select all the elements except the one you want to remove


  return (
    <div>
      <h3>Countries{countries.length}</h3>
      <div>
        {/* display visited country */}
        <h5>Visited Countries : {visitedCountries.length}</h5>
        <ul>
                    {
                        visitedCountries.map(country => <li
                            key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
      </div>
      <div className="flag-container">
                    {
                        visitedFlags.map((flag , idx) => <img key ={idx} src={flag}></img>)
                    }
      </div>
      {/* display Countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            visitedHandelCountry={visitedHandelCountry} handelVisitedFlags={handelVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
