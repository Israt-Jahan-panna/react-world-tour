import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    // const {country , visitedHandelCountry, handelVisitedFlags} = props;
    return (
        <div>
           <h4>Country Details</h4> 
           <hr />
           {/* <CountryData>
            country = {country} visitedHandelCountry={visitedHandelCountry}
        handelVisitedFlags = {handelVisitedFlags}
           </CountryData> */}
           <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;