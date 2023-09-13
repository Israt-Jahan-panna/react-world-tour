import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, visitedHandelCountry, handelVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handelVisited = () => {
    // setVisited(true)
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population :{population}</p>
      <p>Area: {area}</p>
      <p>
        <small> Code{cca3}</small>
      </p>
      <button onClick={() => visitedHandelCountry(country)}>
        Mark visited
      </button>
      <br />
      <button onClick={() => handelVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <button onClick={handelVisited}>{visited ? "visited" : "Going"}</button>
      {/* <button onClick ={handelVisited}>Visited</button> */}
      {/* {visited && 'I have visited this country'} */}
      {visited ? "I have visited this country" : "I want to visit this country"}
      <hr />
      <CountryDetail>
        country ={country} visitedHandelCountry={visitedHandelCountry}
        handelVisitedFlags = {handelVisitedFlags}
      </CountryDetail>
    </div>
  );
};

export default Country;
